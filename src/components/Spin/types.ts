import type { CSSProperties, ReactNode } from "react";

export type SpinSize = "small" | "default" | "large";

export interface SpinProps {
  size?: SpinSize
  spinning?: boolean
  tip?: ReactNode
  style?: CSSProperties
  className?: string
  children?: ReactNode
  delay?: number
}
