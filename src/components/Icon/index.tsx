import type React from "react";
import { type IconProps } from "./types";

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
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
      onClick={onClick}
    />
  );
};

export default Icon;
