import type React from "react";
import styled, { css, keyframes } from "styled-components";

interface SkeletonProps {
  loading?: boolean
  active?: boolean
  children?: React.ReactNode
}

const shimmer = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`;

const SkeletonBlock = styled.div<{ $active?: boolean }>`
  background: linear-gradient(
    90deg,
    #f2f2f2 25%,
    #e6e6e6 37%,
    #f2f2f2 63%
  );
  background-size: 400% 100%;
  animation: ${props => (props.$active ?? false) ? css`${shimmer} 1.4s ease infinite` : "none"};
`;

const Skeleton: React.FC<SkeletonProps> = ({ loading = true, active, children }) => {
  if (!loading) return <>{children}</>;
  return <SkeletonBlock data-testid="skeleton" $active={active} />;
};

export default Skeleton;
