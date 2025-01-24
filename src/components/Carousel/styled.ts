import styled from "styled-components";

export const CarouselWrapper = styled.div<{ $direction?: "horizontal" | "vertical" }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${props => props.$direction === "vertical" && `
    height: 100%;
  `}
`;

export const CarouselContent = styled.div<{
  $effect: "slide" | "fade"
  $currentIndex: number
  $isTransitioning: boolean
  $direction?: "horizontal" | "vertical"
}>`
  display: flex;
  width: 100%;
  height: 100%;
  ${props => props.$direction === "vertical" && `
    flex-direction: column;
  `}

  ${props => props.$effect === "slide" && `
    transform: ${props.$direction === "vertical"
      ? `translateY(-${props.$currentIndex * 100}%)`
      : `translateX(-${props.$currentIndex * 100}%)`
    };
    transition: ${props.$isTransitioning ? "transform 0.3s" : "none"};
  `}

  ${props => props.$effect === "fade" && `
    position: relative;
    
    & > * {
      position: absolute;
      opacity: 0;
      transition: opacity ${props.$isTransitioning ? "0.3s" : "0s"};
      
      &:nth-child(${props.$currentIndex + 1}) {
        opacity: 1;
      }
    }
  `}
`;

export const CarouselItem = styled.div<{ $direction?: "horizontal" | "vertical" }>`
  flex-shrink: 0;
  width: 100%;
  ${props => props.$direction === "vertical" && `
    height: 100%;
  `}
`;

export const CarouselDots = styled.div<{ $direction?: "horizontal" | "vertical" }>`
  position: absolute;
  ${props => props.$direction === "vertical"
    ? `
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      flex-direction: column;
    `
    : `
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
    `
  }
  display: flex;
  gap: 4px;
`;

export const CarouselDot = styled.span<{ $active: boolean }>`
  width: 16px;
  height: 3px;
  background-color: ${props => props.$active ? "#fff" : "rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s;
  cursor: pointer;
`;

export const ArrowButton = styled.button<{ $direction?: "horizontal" | "vertical", $position: "prev" | "next" }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  padding: 8px;

  ${props => props.$direction === "vertical"
    ? `
      left: 50%;
      transform: translateX(-50%) rotate(${props.$position === "prev" ? "90deg" : "90deg"});
      ${props.$position === "prev" ? "top: 10px" : "bottom: 10px"};
    `
    : `
      top: 50%;
      transform: translateY(-50%);
      ${props.$position === "prev" ? "left: 10px" : "right: 10px"};
    `
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
