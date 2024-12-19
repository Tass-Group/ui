import type React from "react";
import { useState, useRef, useEffect } from "react";
import { type SelectProps, type SelectOption } from "./types";
import {
  SelectContainer,
  SelectTrigger,
  SelectValue,
  SelectInput,
  SelectArrow,
  SelectClear,
  Dropdown,
  OptionsList,
  Option,
  NotFound,
  LoadingWrapper
} from "./styled";
import Icon from "../Icon";

const Select: React.FC<SelectProps> = ({
  options = [],
  value: propValue,
  defaultValue,
  placeholder = "Please select",
  disabled = false,
  loading = false,
  allowClear = true,
  showSearch = false,
  onChange,
  onSearch,
  className,
  style,
  dropdownStyle,
  notFoundContent = "No data"
}) => {
  const [value, setValue] = useState<string | number | undefined>(propValue ?? defaultValue);
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (containerRef.current != null && !containerRef.current.contains(e.target as Node)) {
        setVisible(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = options.filter(opt => {
    if (searchValue === "") return true;

    const label = String(opt.label).toLowerCase();
    const value = String(opt.value).toLowerCase();
    const searchTerm = searchValue.toLowerCase();

    return (
      label.includes(searchTerm) ||
      value.includes(searchTerm)
    );
  });

  const handleSelect = (option: SelectOption): void => {
    if (option.disabled ?? false) return;

    if (propValue === undefined) {
      setValue(option.value);
    }
    setVisible(false);
    setSearchValue("");
    onChange?.(option.value, option);
  };

  const handleClear = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (propValue === undefined) {
      setValue(undefined);
    }
    const emptyOption: SelectOption = {
      label: "",
      value: ""
    };
    onChange?.("", emptyOption);
    setSearchValue("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch?.(value);
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!visible) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex(prev =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
          const option = filteredOptions[activeIndex];
          if (option != null && !(option.disabled ?? false)) {
            handleSelect(option);
          }
        }
        break;
      case "Escape":
        e.preventDefault();
        setVisible(false);
        setSearchValue("");
        break;
      default:
        break;
    }
  };

  return (
    <SelectContainer ref={containerRef} className={className} style={style}>
      <SelectTrigger
        onClick={() => { !disabled && setVisible(!visible); }}
        disabled={disabled}
      >
        {showSearch && visible
          ? (
            <SelectInput
              value={searchValue}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={disabled}
              autoFocus
            />
            )
          : (
            <SelectValue>
              {selectedOption?.label ?? placeholder}
            </SelectValue>
            )}

        {allowClear && value !== undefined && !disabled && (
          <SelectClear
            onClick={handleClear}
            role="button"
            aria-label="clear"
          >
            <Icon name="cross" size={12} />
          </SelectClear>
        )}

        <SelectArrow $visible={visible}>
          <Icon name="chevrondown" size={12} />
        </SelectArrow>
      </SelectTrigger>

      <Dropdown visible={visible} style={dropdownStyle}>
        {loading
          ? (
            <LoadingWrapper>Loading...</LoadingWrapper>
            )
          : filteredOptions.length === 0
            ? (
              <NotFound>{notFoundContent}</NotFound>
              )
            : (
              <OptionsList>
                {filteredOptions.map((option, index) => (
                  <Option
                    key={option.value}
                    selected={option.value === value}
                    disabled={option.disabled}
                    active={index === activeIndex}
                    data-testid={`option-${index}`}
                    data-active={index === activeIndex}
                    onClick={() => { handleSelect(option); }}
                    onMouseEnter={() => { setActiveIndex(index); }}
                  >
                    {option.label}
                  </Option>
                ))}
              </OptionsList>
              )}
      </Dropdown>
    </SelectContainer>
  );
};

export default Select;
