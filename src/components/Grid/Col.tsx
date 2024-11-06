import type React from "react";
import { type ColProps } from "./types";
import { StyledCol } from "./styledCol";

const Col: React.FC<ColProps> = ({ children, span, gutter = 0, ...rest }) => {
  return (
    <StyledCol span={span} gutter={gutter} {...rest}>
      {children}
    </StyledCol>
  );
};

export default Col;
