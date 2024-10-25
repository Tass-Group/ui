import React from "react";
import { type ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
      <>
        <button>{title}</button>
      </>
  );
};

export default Button;
