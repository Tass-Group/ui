export type PopoverPlacement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "leftTop"
  | "leftBottom"
  | "right"
  | "rightTop"
  | "rightBottom";

export type TriggerType = "hover" | "focus" | "click";

export interface PopoverProps {
  content?: React.ReactNode
  title?: React.ReactNode
  placement?: PopoverPlacement
  trigger?: TriggerType | TriggerType[]
  open?: boolean
  defaultOpen?: boolean
  arrow?: boolean
  color?: string
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}
