export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  loading?: boolean
  size?: "small" | "default"
  onChange?: (checked: boolean) => void
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
