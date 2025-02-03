import type React from "react";
import { useState } from "react";
import { PopoverWrapper, PopoverContent, PopoverArrow, PopoverInner, PopoverTitle } from "./styled";
import type { PopoverProps } from "./types";

const Popover: React.FC<PopoverProps> = ({
  content,
  title,
  placement = "top",
  trigger = "hover",
  open,
  defaultOpen = false,
  arrow = true,
  color,
  overlayClassName,
  overlayStyle,
  onOpenChange,
  children
}) => {
  const [isVisible, setIsVisible] = useState(defaultOpen);
  const visible = open ?? isVisible;

  const handleVisibilityChange = (newVisible: boolean): void => {
    if (open === undefined) {
      setIsVisible(newVisible);
    }
    onOpenChange?.(newVisible);
  };

  const getEventHandlers = (): Record<string, () => void> => {
    if (trigger === "click") {
      return {
        onClick: () => { handleVisibilityChange(!visible); }
      };
    }

    if (trigger === "hover") {
      return {
        onMouseEnter: () => { handleVisibilityChange(true); },
        onMouseLeave: () => { handleVisibilityChange(false); }
      };
    }

    if (trigger === "focus") {
      return {
        onFocus: () => { handleVisibilityChange(true); },
        onBlur: () => { handleVisibilityChange(false); }
      };
    }

    return {};
  };

  return (
    <PopoverWrapper>
      <div {...getEventHandlers()}>
        {children}
      </div>
      {visible && (
        <PopoverContent
          className={overlayClassName}
          style={overlayStyle}
          $placement={placement}
          $color={color}
        >
          {arrow && <PopoverArrow $placement={placement} $color={color} />}
          <PopoverInner>
            {title !== undefined && <PopoverTitle>{title}</PopoverTitle>}
            {content}
          </PopoverInner>
        </PopoverContent>
      )}
    </PopoverWrapper>
  );
};

export default Popover;
