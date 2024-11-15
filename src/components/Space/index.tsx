import type React from "react";
import { SpaceContainer } from "./styled";
import { type SpaceProps } from "./types";

const Space: React.FC<SpaceProps> = ({ children, size = 8, direction = "horizontal" }) => {
  return <SpaceContainer size={size} direction={direction}>{children}</SpaceContainer>;
};

export default Space;
