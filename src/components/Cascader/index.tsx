import type React from "react";
import { useState, useRef, useEffect } from "react";
import { type CascaderProps, type CascaderOption } from "./types";
import {
  CascaderContainer,
  CascaderInput,
  DropdownContainer,
  OptionList,
  OptionItem,
  ArrowIcon,
  ClearIcon
} from "./styled";
import Icon from "../Icon";

const Cascader: React.FC<CascaderProps> = ({
  options = [],
  defaultValue,
  value: propValue,
  onChange,
  placeholder = "Please select",
  disabled = false,
  allowClear = true,
  expandTrigger = "click",
  displayRender = labels => labels.join(" / "),
  className,
  style
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<Array<string | number>>(propValue ?? defaultValue ?? []);
  const [activeOptions, setActiveOptions] = useState<CascaderOption[][]>([options]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if ((containerRef.current != null) && !containerRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, []);

  // Update value when prop changes
  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const getSelectedOptions = (val: Array<string | number>): CascaderOption[] => {
    const result: CascaderOption[] = [];
    let currentOptions = options;

    val.forEach(v => {
      const option = currentOptions.find(o => o.value === v);
      if (option != null) {
        result.push(option);
        currentOptions = option.children ?? [];
      }
    });

    return result;
  };

  const handleOptionClick = (option: CascaderOption, level: number): void => {
    if (option.disabled ?? false) return;

    const newValue = [...value.slice(0, level), option.value];
    const newActiveOptions = [...activeOptions.slice(0, level + 1)];

    if ((option.children?.length) != null) {
      newActiveOptions.push(option.children);
    }

    setValue(newValue);
    setActiveOptions(newActiveOptions);

    if (((option.children?.length) == null) || (option.isLeaf ?? false)) {
      setVisible(false);
      onChange?.(newValue, getSelectedOptions(newValue));
    }
  };

  const handleClear = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setValue([]);
    setActiveOptions([options]);
    onChange?.([], []);
  };

  const selectedOptions = getSelectedOptions(value);
  const displayLabel = displayRender(selectedOptions.map(o => o.label as string));

  return (
    <CascaderContainer ref={containerRef} className={className} style={style}>
      <CascaderInput
        role="combobox"
        aria-expanded={visible}
        aria-haspopup="listbox"
        onClick={() => { !disabled && setVisible(!visible); }}
        disabled={disabled}
      >
        <span className="label">
          {(value.length > 0) ? displayLabel : placeholder}
        </span>
        {allowClear && value.length > 0 && !disabled && (
          <ClearIcon onClick={handleClear}>
            <Icon name="cross" size={12} />
          </ClearIcon>
        )}
        <ArrowIcon $visible={visible}>
          <Icon name="chevrondown" size={12} />
        </ArrowIcon>
      </CascaderInput>

      {visible && (
        <DropdownContainer>
          {activeOptions.map((options, level) => (
            <OptionList key={level}>
              {options.map(option => (
                <OptionItem
                  key={option.value}
                  disabled={option.disabled}
                  selected={value[level] === option.value}
                  onMouseEnter={() => {
                    if (expandTrigger === "hover" && ((option.children?.length) != null)) {
                      handleOptionClick(option, level);
                    }
                  }}
                  onClick={() => { handleOptionClick(option, level); }}
                >
                  <span>{option.label}</span>
                  {((option.children?.length) != null) && (
                    <Icon name="chevronright" size={12} />
                  )}
                </OptionItem>
              ))}
            </OptionList>
          ))}
        </DropdownContainer>
      )}
    </CascaderContainer>
  );
};

export default Cascader;
