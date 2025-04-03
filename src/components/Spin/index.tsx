import { useEffect, useState } from "react";
import type { FC } from "react";
import type { SpinProps } from "./types";
import {
  SpinContainer,
  SpinDot,
  SpinDotItem,
  SpinText,
  SpinWrapper
} from "./styled";

const Spin: FC<SpinProps> = ({
  size = "default",
  spinning = true,
  tip,
  style,
  className,
  children,
  delay = 0
}) => {
  const [showSpin, setShowSpin] = useState(spinning);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (delay > 0) {
      if (spinning) {
        timeout = setTimeout(() => {
          setShowSpin(true);
        }, delay);
      } else {
        setShowSpin(false);
      }
    } else {
      setShowSpin(spinning);
    }
    return () => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [spinning, delay]);

  const spinElement = (
    <SpinContainer
      $spinning={showSpin}
      $size={size}
      style={style}
      className={`sc-spin ${className ?? ""}`}
    >
      <SpinDot $size={size}>
        <SpinDotItem $size={size} />
        <SpinDotItem $size={size} />
        <SpinDotItem $size={size} />
        <SpinDotItem $size={size} />
      </SpinDot>
      {tip !== undefined && <SpinText $size={size}>{tip}</SpinText>}
    </SpinContainer>
  );

  if (children !== undefined) {
    return (
      <SpinWrapper $spinning={showSpin}>
        {children}
        {showSpin && spinElement}
      </SpinWrapper>
    );
  }

  return spinElement;
};

export default Spin;
