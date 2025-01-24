import type React from "react";
interface SkeletonProps {
    loading?: boolean;
    active?: boolean;
    children?: React.ReactNode;
}
declare const Skeleton: React.FC<SkeletonProps>;
export default Skeleton;
