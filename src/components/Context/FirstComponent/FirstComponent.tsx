import React, { useContext } from "react";
import { Counter, CounterContext } from "../ContextAPI/ContextAPI";
import CounterArea from "../CounterArea/CounterArea";

const FirstComponent = () => {
  const counter = useContext(CounterContext) as Counter;

  return (
    <CounterArea
      counterValue={counter.firstCounter}
      onIncrease={() => {}}
      onDecrease={() => {}}
    />
  );
};

export default FirstComponent;
