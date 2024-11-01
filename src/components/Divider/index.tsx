// Divider.tsx
import type React from "react";
import { type DividerProps } from "./types";
import { StyledDivider } from "./styled";

const Divider: React.FC<DividerProps> = ({
  className = "",
  orientation = "horizontal",
  color,
  text,
  textPosition = "center",
  style = {},
  variant = "solid"
}) => {
  return (
    <StyledDivider
      className={className}
      orientation={orientation}
      color={color}
      text={text}
      textPosition={textPosition}
      style={style}
      variant={variant}
    >
      {text}
    </StyledDivider>
  );
};

export default Divider;
