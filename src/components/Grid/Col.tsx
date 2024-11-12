import type React from "react";
import { type ColProps } from "./types";
import { StyledCol } from "./styledCol";

const Col: React.FC<ColProps> = ({ children, span, gutter = 0, offset = 0, ...rest }) => {
  return (
    <StyledCol span={span} gutter={gutter} offset={offset} {...rest}>
      {children}
    </StyledCol>
  );
};

export default Col;
