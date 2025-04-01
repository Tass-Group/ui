import type { ReactNode } from "react";

export interface ModalProps {
  open?: boolean
  title?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  width?: number | string
  centered?: boolean
  maskClosable?: boolean
  closable?: boolean
  closeIcon?: ReactNode
  mask?: boolean
  zIndex?: number
  className?: string
  style?: React.CSSProperties
  onOk?: () => void
  onCancel?: () => void
  afterClose?: () => void
  children?: ReactNode
}

export interface ModalInstance {
  info: (props: ModalProps) => void
  success: (props: ModalProps) => void
  warning: (props: ModalProps) => void
  error: (props: ModalProps) => void
  destroy: () => void
}

export type ModalComponent = React.FC<ModalProps>;

export interface ModalType extends ModalComponent, ModalInstance {}
