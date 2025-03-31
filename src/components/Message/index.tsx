import React from "react";
import { createRoot } from "react-dom/client";
import Icon from "../Icon";
import type { MessageProps, MessageType } from "./types";
import { MessageContainer, MessageWrapper, MessageContent, MessageClose, MessageIcon } from "./styled";

interface MessageInstanceWithRoot {
  root: ReturnType<typeof createRoot>
  container: HTMLDivElement
}

let messageInstance: MessageInstanceWithRoot | null = null;
const messages: React.ReactNode[] = [];

const Message: React.FC<MessageProps> = ({
  type = "info",
  content,
  duration = 3,
  onClose
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration * 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration, onClose]);

  const handleClose = (): void => {
    setVisible(false);
    onClose?.();
  };

  const getIconName = (type: MessageType): string => {
    switch (type) {
      case "success":
        return "success";
      case "info":
        return "info";
      case "warning":
        return "warning";
      case "error":
        return "danger";
      default:
        return "info";
    }
  };

  return visible
    ? (
      <MessageWrapper $type={type} $visible={visible}>
        <MessageIcon>
          <Icon name={getIconName(type)} className={`icons icon-${getIconName(type)}`} />
        </MessageIcon>
        <MessageContent>{content}</MessageContent>
        <MessageClose className="message-close" onClick={handleClose}>
          <Icon name="danger" className="icons icon-close" />
        </MessageClose>
      </MessageWrapper>
      )
    : null;
};

const createMessage = (type: MessageType) => {
  return (content: React.ReactNode, duration?: number, onClose?: () => void) => {
    const container = document.querySelector(".tass-message-container");
    if (container === null) {
      const div = document.createElement("div");
      div.className = "tass-message-container";
      document.body.appendChild(div);
      const root = createRoot(div);
      messageInstance = {
        root,
        container: div
      };
    }

    messages.push(
      <Message
        key={Date.now()}
        type={type}
        content={content}
        duration={duration}
        onClose={onClose}
      />
    );

    renderMessages();
  };
};

const renderMessages = (): void => {
  if (messageInstance !== null && messages.length > 0) {
    const { root } = messageInstance;
    root.render(<MessageContainer>{messages}</MessageContainer>);
  }
};

const destroy = (): void => {
  if (messageInstance !== null) {
    const { root, container } = messageInstance;
    root.unmount();
    container.parentNode?.removeChild(container);
    messageInstance = null;
    messages.length = 0;
  }
};

export default {
  success: createMessage("success"),
  info: createMessage("info"),
  warning: createMessage("warning"),
  error: createMessage("error"),
  destroy
};
