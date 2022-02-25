import React, { useContext } from "react";
import { Counter, CounterContext } from "../ContextAPI/ContextAPI";
import CounterArea from "../CounterArea/CounterArea";

const SecondComponent = () => {
  const counter = useContext(CounterContext) as Counter;

  return (
    <CounterArea
      counterValue={counter.secondCounter}
      onIncrease={() => {}}
      onDecrease={() => {}}
    />
  );
};

export default SecondComponent;
