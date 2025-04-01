import React, { useEffect, useRef } from "react";
import Icon from "../Icon";
import Button from "../Button";
import type { ModalComponent } from "./types";
import {
  ModalWrapper,
  ModalMask,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "./styled";

const Modal: ModalComponent = ({
  open = false,
  title,
  content,
  footer,
  width,
  centered = false,
  maskClosable = true,
  closable = true,
  closeIcon,
  mask = true,
  zIndex = 1000,
  className,
  style,
  onOk,
  onCancel,
  afterClose,
  children
}) => {
  const [visible, setVisible] = React.useState(open);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    if (!visible && afterClose !== undefined) {
      afterClose();
    }
  }, [visible, afterClose]);

  const handleClose = (): void => {
    setVisible(false);
    if (onCancel !== undefined) {
      onCancel();
    }
  };

  const handleMaskClick = (e: React.MouseEvent): void => {
    if (maskClosable && e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleOk = (): void => {
    if (onOk !== undefined) {
      onOk();
    }
  };

  const renderFooter = (): React.ReactNode => {
    if (footer === undefined) {
      return (
        <>
          <Button title="Cancel" onClick={handleClose} />
          <Button title="OK" type="primary" onClick={handleOk} />
        </>
      );
    }
    return footer;
  };

  const shouldShowHeader = (title !== null && title !== undefined) || closable;
  const shouldShowTitle = title !== null && title !== undefined;

  if (!visible) {
    return null;
  }

  return (
    <ModalWrapper $visible={visible} style={{ zIndex }}>
      {mask && <ModalMask $visible={visible} onClick={handleMaskClick} data-testid="modal-mask" />}
      <ModalContent
        ref={modalRef}
        $visible={visible}
        $width={width}
        $centered={centered}
        className={className}
        style={style}
        data-testid="modal-content"
        data-centered={centered}
      >
        {shouldShowHeader && (
          <ModalHeader>
            {shouldShowTitle && <ModalTitle>{title}</ModalTitle>}
            {closable && (
              <ModalClose onClick={handleClose}>
                {closeIcon ?? <Icon name="cross" />}
              </ModalClose>
            )}
          </ModalHeader>
        )}
        <ModalBody>
          {content ?? children}
        </ModalBody>
        {footer !== null && (
          <ModalFooter>
            {renderFooter()}
          </ModalFooter>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
