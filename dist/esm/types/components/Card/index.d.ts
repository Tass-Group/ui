import type React from "react";
import type { CardProps, CardMetaProps, CardGridProps } from "./types";
declare const Card: React.FC<CardProps> & {
    Meta: React.FC<CardMetaProps>;
    Grid: React.FC<CardGridProps>;
};
export default Card;
