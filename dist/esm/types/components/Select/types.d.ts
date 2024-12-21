/// <reference types="react" />
export interface SelectOption {
    label: React.ReactNode;
    value: string | number;
    disabled?: boolean;
}
export interface SelectProps {
    options?: SelectOption[];
    value?: string | number;
    defaultValue?: string | number;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    allowClear?: boolean;
    showSearch?: boolean;
    onChange?: (value: string | number, option: SelectOption) => void;
    onSearch?: (value: string) => void;
    className?: string;
    style?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    notFoundContent?: React.ReactNode;
}
export interface SelectDropdownProps {
    options: SelectOption[];
    value?: string | number;
    visible: boolean;
    loading?: boolean;
    searchValue: string;
    style?: React.CSSProperties;
    onSelect: (option: SelectOption) => void;
    notFoundContent?: React.ReactNode;
}
