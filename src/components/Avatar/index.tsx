import React, { useState, useRef, useEffect } from "react";
import { StyledAvatar, AvatarGroupWrapper, RestNumber } from "./styled";
import type { AvatarProps, AvatarGroupProps } from "./types";

const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  icon,
  size = "default",
  shape = "circle",
  gap = 4,
  children,
  className,
  style,
  srcSet,
  draggable,
  crossOrigin,
  onError,
  ...rest
}) => {
  const [scale, setScale] = useState(1);
  const [isImgExist, setIsImgExist] = useState(true);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const childrenRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (children == null || nodeRef.current == null || childrenRef.current == null) {
      return;
    }

    const nodeWidth = nodeRef.current.offsetWidth;
    const childrenWidth = childrenRef.current.offsetWidth;
    const gapNum = gap * 2;

    if (childrenWidth + gapNum > nodeWidth) {
      setScale((nodeWidth - gapNum) / childrenWidth);
    }
  }, [children, gap]);

  const handleImgLoadError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const errorFlag = onError?.(e);
    if (errorFlag !== false) {
      setIsImgExist(false);
    }
  };

  const renderChildren = (): React.ReactNode => {
    if (typeof src === "string" && isImgExist) {
      return (
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          draggable={draggable}
          crossOrigin={crossOrigin}
          onError={handleImgLoadError}
        />
      );
    }

    if (src instanceof Object && isImgExist) {
      return src;
    }

    if (icon !== undefined) {
      return icon;
    }

    if (children !== undefined) {
      return (
        <span ref={childrenRef} style={{ transform: `scale(${scale})` }}>
          {children}
        </span>
      );
    }

    return null;
  };

  return (
    <StyledAvatar
      ref={nodeRef}
      className={className}
      style={style}
      $size={size}
      $shape={shape}
      {...rest}
    >
      {renderChildren()}
    </StyledAvatar>
  );
};

const Group: React.FC<AvatarGroupProps> = ({
  children,
  maxCount = 5,
  maxStyle,
  size = "default",
  shape = "circle",
  className,
  style
}) => {
  const childrenArray = React.Children.toArray(children);
  const numOfChildren = childrenArray.length;

  if (maxCount !== undefined && maxCount < numOfChildren) {
    const childrenShow = childrenArray.slice(0, maxCount);
    const restNum = numOfChildren - maxCount;

    return (
      <AvatarGroupWrapper className={className} style={style}>
        {childrenShow.map((child, index) => {
          if (!React.isValidElement<AvatarProps>(child)) return null;
          return React.cloneElement(child, {
            size,
            shape,
            key: `avatar-key-${index}`
          });
        })}
        <RestNumber
          $size={size}
          $shape={shape}
          style={maxStyle}
        >
          +{restNum}
        </RestNumber>
      </AvatarGroupWrapper>
    );
  }

  return (
    <AvatarGroupWrapper className={className} style={style}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<AvatarProps>(child)) return null;
        return React.cloneElement(child, {
          size,
          shape,
          key: `avatar-key-${index}`
        });
      })}
    </AvatarGroupWrapper>
  );
};

const AvatarComponent = Avatar as typeof Avatar & {
  Group: typeof Group
};

AvatarComponent.Group = Group;

export default AvatarComponent;
