import styled from "styled-components";

export const StyledRow = styled.div<{ gutter: number }>`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: -${(props) => props.gutter / 2}px;
  margin-right: -${(props) => props.gutter / 2}px;
  width: calc(100% + ${(props) => props.gutter}px);
`;
