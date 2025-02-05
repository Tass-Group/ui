export interface TabItemType {
  key: string
  label: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  closable?: boolean
  closeIcon?: React.ReactNode
}

export interface TabsProps {
  activeKey?: string
  defaultActiveKey?: string
  items?: TabItemType[]
  centered?: boolean
  type?: "line" | "card" | "editable-card"
  size?: "small" | "middle" | "large"
  mode?: "horizontal" | "vertical"
  tabBarStyle?: React.CSSProperties
  tabBarGutter?: number
  destroyInactiveTabPane?: boolean
  animated?: boolean | { inkBar: boolean, tabPane: boolean }
  hideAdd?: boolean
  addIcon?: React.ReactNode
  onChange?: (activeKey: string) => void
  onTabClick?: (key: string, event: React.MouseEvent) => void
  onEdit?: (targetKey: string | React.MouseEvent, action: "add" | "remove") => void
  className?: string
  style?: React.CSSProperties
}
