import type React from "react";
import { useState, useEffect } from "react";
import { CheckboxWrapper, HiddenInput, CheckboxInner, Label, CheckboxGroup } from "./styled";
import type { CheckboxProps, CheckboxGroupProps } from "./types";
import Divider from "../Divider";

export const Checkbox: React.FC<CheckboxProps> = ({
  checked: propChecked,
  defaultChecked = false,
  disabled = false,
  indeterminate = false,
  onChange,
  className,
  style,
  children
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    if (propChecked !== undefined) {
      setChecked(propChecked);
    }
  }, [propChecked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!disabled) {
      const newChecked = e.target.checked;
      if (propChecked === undefined) {
        setChecked(newChecked);
      }
      onChange?.(newChecked, e);
    }
  };

  return (
    <CheckboxWrapper
      className={className}
      style={style}
      disabled={disabled}
    >
      <HiddenInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <CheckboxInner
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
      />
      {children !== undefined && <Label>{children}</Label>}
    </CheckboxWrapper>
  );
};

export const Group: React.FC<CheckboxGroupProps> = ({
  options = [],
  defaultValue = [],
  value: propValue,
  onChange,
  disabled = false,
  className,
  style,
  showSelectAll = false,
  selectAllText = "Select All"
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const allValues = options.filter(opt => !(opt.disabled ?? false)).map(opt => opt.value);
  const selectableCount = allValues.length;
  const selectedCount = value.filter(v => allValues.includes(v)).length;
  const isAllSelected = selectableCount > 0 && selectedCount === selectableCount;
  const isIndeterminate = selectedCount > 0 && selectedCount < selectableCount;

  const handleSelectAll = (checked: boolean): void => {
    const newValue = checked
      ? [...value, ...allValues.filter(v => !value.includes(v))]
      : value.filter(v => !allValues.includes(v));

    if (propValue === undefined) {
      setValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleChange = (optionValue: string | number, checked: boolean): void => {
    const newValue = checked
      ? [...value, optionValue]
      : value.filter(v => v !== optionValue);

    if (propValue === undefined) {
      setValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <CheckboxGroup className={className} style={style}>
      {showSelectAll && (
        <>
          <Checkbox
            checked={isAllSelected}
            indeterminate={isIndeterminate}
            disabled={disabled || selectableCount === 0}
            onChange={handleSelectAll}
          >
            {selectAllText}
          </Checkbox>
          {selectableCount > 0 && selectableCount !== 0 && <Divider />}
        </>
      )}
      {options.map(option => (
        <Checkbox
          key={option.value}
          checked={value.includes(option.value)}
          disabled={disabled || option.disabled}
          onChange={(checked) => { handleChange(option.value, checked); }}
        >
          {option.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

const CheckboxComponent = Checkbox as React.FC<CheckboxProps> & {
  Group: React.FC<CheckboxGroupProps>
};

CheckboxComponent.Group = Group;
export default CheckboxComponent;
