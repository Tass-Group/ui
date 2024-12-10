import type React from "react";
import { useContext, useState } from "react";
import { RadioWrapper, RadioInput, RadioControl, RadioGroupWrapper } from "./styled";
import { RadioGroupContext } from "./context";
import type { RadioProps, RadioGroupProps } from "./types";

const Radio: React.FC<RadioProps> = ({
  checked: checkedProp,
  defaultChecked,
  disabled,
  value,
  onChange,
  className,
  style,
  children
}) => {
  const [innerChecked, setInnerChecked] = useState(defaultChecked ?? false);
  const radioGroup = useContext(RadioGroupContext);

  const checked = (radioGroup != null) ? radioGroup.value === value : (checkedProp ?? innerChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (disabled ?? false) return;

    if (radioGroup == null) {
      setInnerChecked(e.target.checked);
      onChange?.(e);
    } else {
      radioGroup.onChange?.(e);
    }
  };

  return (
    <RadioWrapper
      className={className}
      style={style}
      disabled={disabled ?? radioGroup?.disabled}
    >
      <RadioInput
        type="radio"
        checked={checked}
        disabled={disabled ?? radioGroup?.disabled}
        value={value}
        name={radioGroup?.name}
        onChange={handleChange}
      />
      <RadioControl checked={checked} disabled={disabled ?? radioGroup?.disabled} />
      {children}
    </RadioWrapper>
  );
};

const Group: React.FC<RadioGroupProps> = ({
  value: valueProp,
  defaultValue,
  onChange,
  disabled,
  name,
  options,
  className,
  style,
  children,
  direction = "horizontal"
}) => {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const value = valueProp ?? innerValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    if (valueProp === undefined) {
      setInnerValue(newValue);
    }
    onChange?.(newValue);
  };

  const context = {
    value,
    onChange: handleChange,
    disabled,
    name
  };

  const renderGroup = (): React.ReactNode => {
    if (options != null) {
      return options.map((option) => {
        if (typeof option === "string") {
          return (
            <Radio
              key={option}
              value={option}
              disabled={disabled}
            >
              {option}
            </Radio>
          );
        }
        const { label, value, disabled: optionDisabled } = option;
        return (
          <Radio
            key={value.toString()}
            value={value}
            disabled={disabled ?? optionDisabled}
          >
            {label}
          </Radio>
        );
      });
    }
    return children;
  };

  return (
    <RadioGroupContext.Provider value={context}>
      <RadioGroupWrapper className={className} style={style} direction={direction}>
        {renderGroup()}
      </RadioGroupWrapper>
    </RadioGroupContext.Provider>
  );
};

const RadioComponent = Radio as typeof Radio & {
  Group: typeof Group
};

RadioComponent.Group = Group;

export default RadioComponent;
