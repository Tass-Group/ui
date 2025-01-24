import React, { useState, useRef, useEffect } from "react";
import { CarouselWrapper, CarouselContent, CarouselItem, CarouselDots, CarouselDot, ArrowButton } from "./styled";
import type { CarouselProps } from "./types";
import Icon from "../Icon";

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = false,
  autoplaySpeed = 3000,
  dots = true,
  arrows = true,
  effect = "slide",
  className,
  style,
  direction = "horizontal"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout>();
  const items = React.Children.toArray(children);

  const goTo = (index: number): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const next = (): void => {
    const nextIndex = (currentIndex + 1) % items.length;
    goTo(nextIndex);
  };

  const prev = (): void => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    goTo(prevIndex);
  };

  useEffect(() => {
    if (autoplay) {
      autoplayTimer.current = setInterval(next, autoplaySpeed);
    }
    return () => {
      if (autoplayTimer.current != null) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [autoplay, autoplaySpeed]);

  return (
    <CarouselWrapper className={className} style={style} $direction={direction}>
      <CarouselContent
        $effect={effect}
        $currentIndex={currentIndex}
        $isTransitioning={isTransitioning}
        $direction={direction}
      >
        {items.map((child, index) => (
          <CarouselItem key={index} $direction={direction}>
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>

      {dots && (
        <CarouselDots $direction={direction}>
          {items.map((_, index) => (
            <CarouselDot
              key={index}
              $active={index === currentIndex}
              onClick={() => { goTo(index); }}
            />
          ))}
        </CarouselDots>
      )}

      {arrows && (
        <>
          <ArrowButton onClick={prev} $position="prev" $direction={direction}>
            <Icon name="chevronleft" />
          </ArrowButton>
          <ArrowButton onClick={next} $position="next" $direction={direction}>
            <Icon name="chevronright" />
          </ArrowButton>
        </>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
