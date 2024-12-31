import type React from "react";
import { type IconProps } from "./types";

const Icon: React.FC<IconProps> = ({
  name,
  size = 16,
  color = "currentColor",
  className = "",
  style = {},
  onClick
}) => {
  return (
    <span
      className={`icons icon-${name} ${className}`}
      style={{
        fontSize: size,
        color,
        ...style
      }}
      role="img"
      aria-label={name}
      onClick={onClick}
    />
  );
};

export default Icon;
