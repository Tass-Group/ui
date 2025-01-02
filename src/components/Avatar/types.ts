export interface AvatarProps {
  alt?: string
  src?: string | React.ReactNode
  icon?: React.ReactNode
  size?: number | "large" | "small" | "default"
  shape?: "circle" | "square"
  gap?: number
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  srcSet?: string
  draggable?: boolean | "true" | "false"
  crossOrigin?: "" | "anonymous" | "use-credentials"
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => boolean
}

export interface AvatarGroupProps {
  className?: string
  children?: React.ReactNode
  maxCount?: number
  maxPopoverPlacement?: "top" | "bottom"
  maxStyle?: React.CSSProperties
  size?: number | "large" | "small" | "default"
  shape?: "circle" | "square"
  style?: React.CSSProperties
}
