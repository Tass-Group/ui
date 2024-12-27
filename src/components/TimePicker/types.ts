export interface TimePickerProps {
  value?: Date
  defaultValue?: Date
  onChange?: (time: Date | null) => void
  placeholder?: string
  disabled?: boolean
  format?: string
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  showSecond?: boolean
  className?: string
  style?: React.CSSProperties
  clearable?: boolean
  size?: "small" | "medium" | "large"
}

export interface TimeColumnProps {
  type: "hour" | "minute" | "second"
  value: number
  onChange: (value: number) => void
  step?: number
  disabled?: boolean
}
