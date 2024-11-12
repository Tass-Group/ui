import styled from "styled-components";

export const StyledCol = styled.div<{ span?: number, gutter: number, offset?: number }>`
  flex: 0 0 ${(props) => ((props.span != null) ? (props.span / 24) * 100 : 100)}%;
  max-width: ${(props) => ((props.span != null) ? (props.span / 24) * 100 : 100)}%;
  margin-left: ${(props) =>
    props.offset != null ? ((props.offset / 24) * 100) + "%" : props.gutter / 2 + "px"};
  margin-right: ${(props) => props.gutter / 2}px;
  box-sizing: border-box;
  text-align: center;
`;
