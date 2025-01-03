import type React from "react";
import { BadgeWrapper, BadgeCount, StatusText, RibbonWrapper, RibbonCorner, StatusDot, StatusWrapper } from "./styled";
import type { BadgeProps, RibbonProps } from "./types";

const Badge: React.FC<BadgeProps> = ({
  count,
  showZero = false,
  overflowCount = 99,
  dot = false,
  status,
  color,
  text,
  offset,
  size = "default",
  title,
  children,
  className,
  style
}) => {
  const numberedDisplay = typeof count === "number" && count > overflowCount
    ? `${overflowCount}+`
    : count;

  const showBadge = dot || (numberedDisplay !== undefined && (showZero || numberedDisplay !== 0));

  const badge = showBadge && (
    <BadgeCount
      $dot={dot}
      $status={status}
      $color={color}
      $size={size}
      $standalone={children == null}
      $offset={offset}
      title={title}
    >
      {!dot && numberedDisplay}
    </BadgeCount>
  );

  if (children == null) {
    return (
      <span className={className} style={style}>
        {status !== undefined
          ? (
            <StatusWrapper>
              <StatusDot $status={status} data-testid="status-dot" />
              {text !== undefined && <StatusText>{text}</StatusText>}
            </StatusWrapper>
            )
          : (
            <>
              {badge}
              {text !== undefined && <StatusText>{text}</StatusText>}
            </>
            )}
      </span>
    );
  }

  return (
    <BadgeWrapper className={className} style={style}>
      {children}
      {badge}
      {status !== undefined && text !== undefined && <StatusText>{text}</StatusText>}
    </BadgeWrapper>
  );
};

const Ribbon: React.FC<RibbonProps> = ({
  text,
  color,
  placement = "end",
  className,
  style,
  children
}) => {
  return (
    <RibbonWrapper className={className} style={style}>
      {children}
      <RibbonCorner $color={color} $placement={placement} data-testid="ribbon-corner">
        {text}
      </RibbonCorner>
    </RibbonWrapper>
  );
};

const BadgeComponent = Badge as typeof Badge & {
  Ribbon: typeof Ribbon
};

BadgeComponent.Ribbon = Ribbon;

export default BadgeComponent;
