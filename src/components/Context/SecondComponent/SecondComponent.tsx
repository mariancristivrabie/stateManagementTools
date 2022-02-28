import React, { useContext } from "react";
import { Counter, CounterContext } from "../ContextAPI/ContextAPI";
import CounterArea from "../CounterArea/CounterArea";
import getNewCounterValue from "../Helpers/counterUpdater";

const SecondCounter = () => {
  const { counterValues, setCounterValues } = useContext(CounterContext) as {
    counterValues: Counter;
    setCounterValues: Function;
  };
  console.log("RENDERED SECOND");

  return (
    <CounterArea
      counterValue={counterValues.secondCounter}
      onIncrease={() =>
        setCounterValues(
          getNewCounterValue(counterValues, "secondCounter", "INCREASE")
        )
      }
      onDecrease={() =>
        setCounterValues(
          getNewCounterValue(counterValues, "secondCounter", "DECREASE")
        )
      }
    />
  );
};

export default React.memo(SecondCounter);
