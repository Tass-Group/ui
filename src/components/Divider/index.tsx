import type React from "react";
import { type DividerProps } from "./types";
import { StyledDivider } from "./styled";

const Divider: React.FC<DividerProps> = ({
  className = "",
  orientation = "horizontal",
  color,
  text,
  position = "center",
  style = {},
  variant = "solid"
}) => {
  return (
    <StyledDivider
      role="separator"
      className={className}
      orientation={orientation}
      color={color}
      position={position}
      style={style}
      variant={variant}
    >
      {(text != null)
        ? (
          <>
            {position !== "right" && <span className="line" />}
            <span className="text">{text}</span>
            {position !== "left" && <span className="line" />}
          </>
          )
        : (
          <span className="line" style={{ margin: 0 }} />
          )}
    </StyledDivider>
  );
};

export default Divider;
