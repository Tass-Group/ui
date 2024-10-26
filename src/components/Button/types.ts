export interface ButtonProps {
  title?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: "default" | "danger" | "success" | "warning" | "primary"
  icon?: React.ReactNode
  color?: string
  size?: "small" | "medium" | "large"
  shape?: "circle" | "round" | "square"
}
