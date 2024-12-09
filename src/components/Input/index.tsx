import type React from "react";
import { useState, useRef } from "react";
import { InputWrapper, StyledInput, Prefix, Suffix, ClearButton, InputGroup, TextArea } from "./styled";
import type { InputProps, InputGroupProps, TextAreaProps } from "./types";
import Icon from "../Icon";

export const Input: React.FC<InputProps> = ({
  size = "middle",
  disabled = false,
  prefix,
  suffix,
  allowClear,
  onChange,
  onPressEnter,
  status,
  bordered = true,
  className,
  style,
  value,
  defaultValue,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [innerValue, setInnerValue] = useState(defaultValue ?? value ?? "");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!disabled) {
      setInnerValue(e.target.value);
      onChange?.(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onPressEnter?.(e);
    }
  };

  const handleClear = (): void => {
    setInnerValue("");
    const event = new Event("input", { bubbles: true });
    inputRef.current?.dispatchEvent(event);
    onChange?.(event as unknown as React.ChangeEvent<HTMLInputElement>);
    inputRef.current?.focus();
  };

  return (
    <InputWrapper
      className={className}
      style={style}
      disabled={disabled}
      bordered={bordered}
      status={status}
      $focused={focused}
    >
      {prefix !== null && <Prefix role="img" aria-label={typeof prefix === "string" ? prefix : "input-prefix"}>{prefix}</Prefix>}
      <StyledInput
        ref={inputRef}
        size={size}
        disabled={disabled}
        value={innerValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => { setFocused(true); }}
        onBlur={() => { setFocused(false); }}
        {...rest}
      />
      {(suffix !== null || ((allowClear ?? false) && innerValue !== "")) && (
        <Suffix>
          {(allowClear ?? false) && innerValue !== "" && (
            <ClearButton
              onClick={handleClear}
              role="button"
              aria-label="clear input"
            >
              <Icon name="cross" size={12} />
            </ClearButton>
          )}
          {suffix !== null && <span role="img" aria-label={typeof suffix === "string" ? suffix : "input-suffix"}>{suffix}</span>}
        </Suffix>
      )}
    </InputWrapper>
  );
};

export const Group: React.FC<InputGroupProps> = ({
  children,
  compact = false,
  className,
  style
}) => {
  return (
    <InputGroup compact={compact} className={className} style={style}>
      {children}
    </InputGroup>
  );
};

export const TextAreaComponent: React.FC<TextAreaProps> = ({
  allowClear,
  bordered = true,
  maxLength,
  showCount,
  status,
  onChange,
  value,
  defaultValue,
  className,
  style,
  ...rest
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue ?? value ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newValue = (maxLength != null) ? e.target.value.slice(0, maxLength) : e.target.value;
    setInnerValue(newValue);
    onChange?.({ ...e, target: { ...e.target, value: newValue } });
  };

  return (
    <div className={className} style={style}>
      <TextArea
        value={innerValue}
        onChange={handleChange}
        bordered={bordered}
        status={status}
        maxLength={maxLength}
        {...rest}
      />
      {showCount !== undefined && (
        <div style={{ textAlign: "right", color: "rgba(0, 0, 0, 0.45)" }}>
          {String(innerValue).length}{(maxLength != null) ? `/${maxLength}` : ""}
        </div>
      )}
    </div>
  );
};

const InputComponent = Input as typeof Input & {
  Group: typeof Group
  TextArea: typeof TextAreaComponent
};

InputComponent.Group = Group;
InputComponent.TextArea = TextAreaComponent;

export default InputComponent;
