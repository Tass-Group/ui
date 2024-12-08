export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface CheckboxGroupProps {
  options?: CheckboxOptionType[]
  defaultValue?: Array<string | number>
  value?: Array<string | number>
  onChange?: (checkedValues: Array<string | number>) => void
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  showSelectAll?: boolean
  selectAllText?: string
}

export interface CheckboxOptionType {
  label: React.ReactNode
  value: string | number
  disabled?: boolean
}
