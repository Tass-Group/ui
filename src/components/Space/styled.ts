import styled from "styled-components";

export const SpaceContainer = styled.div<{
  size: number
  direction: "horizontal" | "vertical"
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction === "horizontal" ? "row" : "column"};
  gap: ${({ size }) => `${size}px`};
`;
