import type React from "react";
import { type SkeletonProps } from "./types";
import {
  SkeletonAvatar,
  SkeletonContent,
  SkeletonParagraph,
  SkeletonTitle
} from "./styled";

const Skeleton: React.FC<SkeletonProps> = ({
  loading = true,
  active,
  children,
  avatar = false,
  title = true,
  paragraph = true,
  round
}) => {
  if (!loading) return <>{children}</>;

  const avatarProps = typeof avatar === "object" ? avatar : {};
  const titleProps = typeof title === "object" ? title : {};
  const paragraphProps = typeof paragraph === "object" ? paragraph : {};

  const showAvatar = avatar === true || typeof avatar === "object";
  const showTitle = title === true || typeof title === "object";
  const showParagraph = paragraph === true || typeof paragraph === "object";

  return (
    <SkeletonContent $round={round}>
      {showAvatar && (
        <SkeletonAvatar
          $size={avatarProps.size}
          $shape={avatarProps.shape}
          $active={active}
        />
      )}
      <div style={{ width: "100%" }}>
        {showTitle && (
          <SkeletonTitle
            $width={titleProps.width}
            $active={active}
          />
        )}
        {showParagraph && (
          <>
            {Array.from({ length: paragraphProps.rows ?? 1 }).map((_, index) => (
              <SkeletonParagraph
                key={index}
                $rows={index}
                $width={paragraphProps.width}
                $active={active}
              />
            ))}
          </>
        )}
      </div>
    </SkeletonContent>
  );
};

export default Skeleton;
