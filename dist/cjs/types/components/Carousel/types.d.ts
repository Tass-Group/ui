/// <reference types="react" />
export interface CarouselProps {
    children: React.ReactNode;
    autoplay?: boolean;
    autoplaySpeed?: number;
    dots?: boolean;
    arrows?: boolean;
    effect?: "slide" | "fade";
    className?: string;
    style?: React.CSSProperties;
    direction?: "horizontal" | "vertical";
}
