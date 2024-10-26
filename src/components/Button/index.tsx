import type React from "react";
import { type ButtonProps } from "./types";
import { StyledButton } from "./styled";

const Button: React.FC<ButtonProps> = ({
  title = "Button",
  type = "default",
  size = "medium",
  shape = "square",
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      size={size}
      shape={shape}
      disabled={disabled}
      {...rest}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
