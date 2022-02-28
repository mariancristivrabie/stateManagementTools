import React, { useContext } from "react";
import { Counter, CounterContext } from "../ContextAPI/ContextAPI";
import CounterArea from "../CounterArea/CounterArea";
import getNewCounterValue from "../Helpers/counterUpdater";

const FirstComponent = () => {
  const { counterValues, setCounterValues } = useContext(CounterContext) as {
    counterValues: Counter;
    setCounterValues: Function;
  };
  console.log("RENDERED FIRST");

  return (
    <CounterArea
      counterValue={counterValues.firstCounter}
      onIncrease={() =>
        setCounterValues(
          getNewCounterValue(counterValues, "firstCounter", "INCREASE")
        )
      }
      onDecrease={() =>
        setCounterValues(
          getNewCounterValue(counterValues, "firstCounter", "DECREASE")
        )
      }
    />
  );
};

export default React.memo(FirstComponent);
