import type React from "react";
import { type ButtonProps } from "./types";
import { StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({
  title = "Button",
  type = "default",
  size = "medium",
  shape = "square",
  ...rest
}) => {
  return (
    <StyledButton type={type} size={size} shape={shape} {...rest}>
      {title}
    </StyledButton>
  );
};

export default Button;
