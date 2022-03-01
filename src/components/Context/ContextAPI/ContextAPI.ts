import { createContext } from "react";

export interface Counter {
  firstCounter: number;
  secondCounter: number;
}

export const CounterContext = createContext({});
