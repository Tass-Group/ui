import { createContext } from "react";
import type { RadioGroupContextProps } from "./types";

export const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);
