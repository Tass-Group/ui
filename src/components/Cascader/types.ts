export interface CascaderOption {
  value: string | number
  label: React.ReactNode
  disabled?: boolean
  children?: CascaderOption[]
  isLeaf?: boolean
}

export interface CascaderProps {
  options: CascaderOption[]
  defaultValue?: Array<string | number>
  value?: Array<string | number>
  onChange?: (value: Array<string | number>, selectedOptions: CascaderOption[]) => void
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  className?: string
  style?: React.CSSProperties
  expandTrigger?: "click" | "hover"
  displayRender?: (labels: string[]) => React.ReactNode
}
