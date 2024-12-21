import type React from "react";
import { useState, useRef, useEffect } from "react";
import type { SliderProps } from "./types";
import {
  SliderWrapper,
  SliderRail,
  SliderTrack,
  SliderHandle,
  SliderMark,
  SliderStep,
  SliderDot,
  SliderTooltip
} from "./styled";

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  value: propValue,
  disabled = false,
  vertical = false,
  marks,
  included = true,
  range = false,
  onChange,
  onAfterChange,
  className,
  style,
  tooltipVisible = true
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const value = propValue ?? innerValue;

  useEffect(() => {
    if (propValue !== undefined) {
      setInnerValue(propValue);
    }
  }, [propValue]);

  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dragIndex = useRef<number>(-1);

  // 计算百分比位置
  const getOffset = (val: number): number => {
    return ((val - min) / (max - min)) * 100;
  };

  // 根据位置算值
  const getValue = (offset: number): number => {
    const ratio = offset / 100;
    const rawValue = ratio * (max - min) + min;

    // 移除 marks 相关的特殊处理，使用 step 来控制滑动粒度
    const steppedValue = (step !== 0)
      ? Math.round(rawValue / step) * step
      : rawValue;

    return Math.max(min, Math.min(max, steppedValue));
  };

  // 处理鼠标事件
  const handleMouseDown = (e: React.MouseEvent, index: number): void => {
    if (disabled) return;
    e.preventDefault();
    dragIndex.current = index;
    setDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (sliderRef.current === null || dragIndex.current === -1) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offset = vertical
      ? ((rect.bottom - e.clientY) / rect.height) * 100
      : ((e.clientX - rect.left) / rect.width) * 100;

    const newValue = getValue(offset);
    updateValue(newValue);
  };

  const handleMouseUp = (): void => {
    setDragging(false);
    dragIndex.current = -1;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    onAfterChange?.(value);
  };

  // 更新值
  const updateValue = (newValue: number): void => {
    if (range && Array.isArray(value)) {
      const newRange = [...value] as [number, number];
      newRange[dragIndex.current] = newValue;

      if (dragIndex.current === 0) {
        newRange[0] = Math.min(newRange[0], newRange[1]);
      } else {
        newRange[1] = Math.max(newRange[0], newRange[1]);
      }
      setInnerValue(newRange);
      onChange?.(newRange);
    } else if (!range) {
      setInnerValue(newValue);
      onChange?.(newValue);
    }
  };

  // 处理点击轨道
  const handleRailClick = (e: React.MouseEvent): void => {
    if (disabled || sliderRef.current === null) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offset = vertical
      ? ((rect.bottom - e.clientY) / rect.height) * 100
      : ((e.clientX - rect.left) / rect.width) * 100;

    const newValue = getValue(offset);

    if (range && Array.isArray(value)) {
      // 找到最近手柄
      const [v0, v1] = value;
      dragIndex.current = Math.abs(newValue - v0) < Math.abs(newValue - v1) ? 0 : 1;
    } else {
      dragIndex.current = 0;
    }

    updateValue(newValue);
    onAfterChange?.(value);
  };

  // 渲染标记点
  const renderMarks = (): React.ReactNode => {
    if (marks === undefined) return null;

    return Object.entries(marks).map(([key, mark]) => {
      const offset = getOffset(Number(key));
      const markNode = typeof mark === "object" && mark !== null && "label" in mark
        ? mark.label
        : mark;

      const style = typeof mark === "object" && mark !== null && "style" in mark
        ? mark.style
        : undefined;

      return (
        <SliderMark
          key={key}
          vertical={vertical}
          offset={offset}
          style={style}
        >
          {markNode}
        </SliderMark>
      );
    });
  };

  // 渲染步进点
  const renderSteps = (): React.ReactNode => {
    if (marks == null) return null;

    const points = Object.keys(marks).map(Number);
    const current = Array.isArray(value) ? value : [value];

    return (
      <SliderStep vertical={vertical}>
        {points.map(point => {
          const offset = getOffset(point);
          const active = included && current.some(v => v >= point);

          return (
            <SliderDot
              key={point}
              vertical={vertical}
              offset={offset}
              $active={active}
            />
          );
        })}
      </SliderStep>
    );
  };

  // 处理 TouchEvent 类型
  const handleTouchStart = (e: React.TouchEvent, index: number): void => {
    if (e.touches[0] === undefined) return;

    const touch = e.touches[0];
    const mouseEvent: React.MouseEvent<Element> = {
      preventDefault: () => { },
      clientX: touch.clientX,
      clientY: touch.clientY,
      target: e.target,
      currentTarget: e.currentTarget,
      stopPropagation: () => { },
      altKey: false,
      bubbles: true,
      button: 0,
      buttons: 1,
      cancelable: true,
      ctrlKey: false,
      detail: 1,
      eventPhase: 0,
      metaKey: false,
      movementX: 0,
      movementY: 0,
      pageX: touch.pageX,
      pageY: touch.pageY,
      relatedTarget: null,
      screenX: touch.screenX,
      screenY: touch.screenY,
      shiftKey: false,
      type: "mousedown",
      view: window,
      getModifierState: () => false,
      isDefaultPrevented: () => false,
      isPropagationStopped: () => false,
      persist: () => { },
      nativeEvent: new MouseEvent("mousedown")
    } as unknown as React.MouseEvent<Element>;

    handleMouseDown(mouseEvent, index);
  };

  // 修改 Handle 渲染部分
  const renderHandle = (val: number, index: number): React.ReactNode => (
    <>
      <SliderHandle
        vertical={vertical}
        offset={getOffset(val)}
        dragging={dragging && dragIndex.current === index}
        disabled={disabled}
        onMouseDown={(e) => { handleMouseDown(e, index); }}
        onTouchStart={(e) => { handleTouchStart(e, index); }}
      />
      <SliderTooltip
        $visible={tooltipVisible || dragging}
        vertical={vertical}
        offset={getOffset(val)}
      >
        {val}
      </SliderTooltip>
    </>
  );

  return (
    <SliderWrapper
      ref={sliderRef}
      className={className}
      style={style}
      vertical={vertical}
    >
      <SliderRail vertical={vertical} onClick={handleRailClick} />

      {range && Array.isArray(value)
        ? (
          <>
            <SliderTrack
              vertical={vertical}
              offset={getOffset(value[0])}
              length={getOffset(value[1]) - getOffset(value[0])}
              disabled={disabled}
            />
            {renderHandle(value[0], 0)}
            {renderHandle(value[1], 1)}
          </>
          )
        : (
          <>
            <SliderTrack
              vertical={vertical}
              offset={0}
              length={getOffset(value as number)}
              disabled={disabled}
            />
            {renderHandle(value as number, 0)}
          </>
          )}

      {renderSteps()}
      {renderMarks()}
    </SliderWrapper>
  );
};

export default Slider;
