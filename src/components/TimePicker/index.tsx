import type React from "react";
import { useState, useRef, useEffect } from "react";
import { format as formatDate } from "date-fns";
import { TimePickerWrapper, Input, Dropdown, IconWrapper, Footer, Button, TimeColumnsWrapper } from "./styled";
import { type TimePickerProps } from "./types";
import TimeColumn from "./TimeColumn";
import Icon from "../Icon";
import useClickOutside from "../../hooks/useClickOutside";

const TimePicker: React.FC<TimePickerProps> = ({
  value: propValue,
  defaultValue,
  onChange,
  placeholder = "Select time",
  disabled = false,
  format = "HH:mm:ss",
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  showSecond = true,
  className,
  style,
  clearable = true,
  size = "medium"
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<Date | null>(propValue ?? defaultValue ?? null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, () => {
    setVisible(false);
  });

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleTimeChange = (type: "hour" | "minute" | "second", newValue: number): void => {
    const newDate = new Date(value ?? new Date());

    switch (type) {
      case "hour":
        newDate.setHours(newValue);
        break;
      case "minute":
        newDate.setMinutes(newValue);
        break;
      case "second":
        newDate.setSeconds(newValue);
        break;
    }

    setValue(newDate);
    onChange?.(newDate);
  };

  const handleClear = (e?: React.MouseEvent): void => {
    e?.stopPropagation();
    setValue(null);
    onChange?.(null);
  };

  const handleNow = (): void => {
    const now = new Date();
    setValue(now);
    onChange?.(now);
  };

  const handleOk = (): void => {
    setVisible(false);
  };

  const displayValue = (value != null) ? formatDate(value, format) : "";

  return (
    <TimePickerWrapper data-testid="time-picker-wrapper" className={className} style={style}>
      <Input
        data-testid="time-picker-input"
        onClick={() => {
          if (!disabled) {
            setVisible(!visible);
          }
        }}
        disabled={disabled}
        size={size}
      >
        <span data-testid="time-display" style={{ color: (value != null) ? "inherit" : "#00000040" }}>
          {displayValue !== "" ? displayValue : placeholder}
        </span>
        <IconWrapper>
          {clearable && (value != null) && (
            <span
              data-testid="clear-button"
              style={{ marginRight: 4, cursor: "pointer" }}
              onClick={handleClear}
            >
              <Icon name="danger" size={12} />
            </span>
          )}
          <Icon name="clock" size={14} />
        </IconWrapper>
      </Input>

      {visible && !disabled && (
        <Dropdown>
          <TimeColumnsWrapper>
            <TimeColumn
              type="hour"
              value={value?.getHours() ?? 0}
              onChange={(v) => { handleTimeChange("hour", v); }}
              step={hourStep}
            />
            <TimeColumn
              type="minute"
              value={value?.getMinutes() ?? 0}
              onChange={(v) => { handleTimeChange("minute", v); }}
              step={minuteStep}
            />
            {showSecond && (
              <TimeColumn
                type="second"
                value={value?.getSeconds() ?? 0}
                onChange={(v) => { handleTimeChange("second", v); }}
                step={secondStep}
              />
            )}
          </TimeColumnsWrapper>

          <Footer>
            <Button onClick={handleNow}>此刻</Button>
            <Button onClick={handleOk}>确定</Button>
          </Footer>
        </Dropdown>
      )}
    </TimePickerWrapper>
  );
};

export default TimePicker;
