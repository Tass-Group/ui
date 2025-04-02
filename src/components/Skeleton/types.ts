export interface SkeletonProps {
  loading?: boolean
  active?: boolean
  children?: React.ReactNode
  avatar?: boolean | { size?: "small" | "default" | "large", shape?: "circle" | "square" }
  title?: boolean | { width?: number | string }
  paragraph?: boolean | { rows?: number, width?: number | string | Array<number | string> }
  round?: boolean
}

export type SkeletonAvatarSize = "small" | "default" | "large";
export type SkeletonAvatarShape = "circle" | "square";
