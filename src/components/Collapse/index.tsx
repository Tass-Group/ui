import type React from "react";
import { useState, useCallback } from "react";
import Icon from "../Icon";
import {
  CollapseWrapper,
  CollapseItem,
  CollapseHeader,
  CollapseContent,
  CollapseArrow,
  CollapseExtra
} from "./styled";
import type { CollapseProps, CollapseItemType } from "./types";

const Collapse: React.FC<CollapseProps> = ({
  items = [],
  activeKey,
  defaultActiveKey,
  accordion = false,
  bordered = true,
  ghost = false,
  expandIcon,
  expandIconPosition = "start",
  size = "middle",
  onChange,
  className,
  style
}) => {
  const [activeKeys, setActiveKeys] = useState<string[]>(() => {
    const defaultKeys = activeKey ?? defaultActiveKey ?? [];
    return Array.isArray(defaultKeys) ? defaultKeys : [defaultKeys];
  });

  const handleItemClick = useCallback((key: string) => {
    let newActiveKeys: string[];

    if (accordion) {
      newActiveKeys = activeKeys.includes(key) ? [] : [key];
    } else {
      newActiveKeys = activeKeys.includes(key)
        ? activeKeys.filter(k => k !== key)
        : [...activeKeys, key];
    }

    setActiveKeys(newActiveKeys);
    onChange?.(accordion ? (newActiveKeys[0] ?? "") : newActiveKeys);
  }, [accordion, activeKeys, onChange]);

  const renderExpandIcon = (panelProps: CollapseItemType): React.ReactNode => {
    const isActive = activeKeys.includes(panelProps.key);
    if (expandIcon !== undefined) {
      return (
        <CollapseArrow $expanded={isActive}>
          {expandIcon(panelProps)}
        </CollapseArrow>
      );
    }
    return (
      <CollapseArrow>
        <Icon name={isActive ? "chevrondown" : "chevronright"} />
      </CollapseArrow>
    );
  };

  return (
    <CollapseWrapper
      className={className}
      style={style}
      $bordered={bordered}
      $ghost={ghost}
      $size={size}
    >
      {items.map(item => {
        const isActive = activeKeys.includes(item.key);
        const isDisabled = item.collapsible === "disabled";

        return (
          <CollapseItem key={item.key} $bordered={bordered} $ghost={ghost}>
            <CollapseHeader
              onClick={() => { !isDisabled && handleItemClick(item.key); }}
              $expandIconPosition={expandIconPosition}
              $disabled={isDisabled}
            >
              {expandIconPosition === "start" && item.showArrow !== false && renderExpandIcon(item)}
              <div className="collapse-header-text">{item.label}</div>
              {expandIconPosition === "end" && item.showArrow !== false && renderExpandIcon(item)}
              {item.extra !== undefined && <CollapseExtra>{item.extra}</CollapseExtra>}
            </CollapseHeader>
            <CollapseContent $active={isActive}>
              {item.children}
            </CollapseContent>
          </CollapseItem>
        );
      })}
    </CollapseWrapper>
  );
};

export default Collapse;
