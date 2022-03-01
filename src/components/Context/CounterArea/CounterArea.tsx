import React from "react";
import { StyledCounterArea } from "./StyledCounterArea";

interface CounterAreaProps {
  counterValue: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CounterArea = ({
  counterValue,
  onIncrease,
  onDecrease,
}: CounterAreaProps) => (
  <StyledCounterArea>
    <div className="counter__value">Counter value: {counterValue}</div>
    <div className="counter__actions">
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
    </div>
  </StyledCounterArea>
);

export default CounterArea;
