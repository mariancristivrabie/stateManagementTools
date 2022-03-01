import React, { useContext } from "react";
import { ThirdCounterContext } from "../ContextAPI/ThirdCounterContextAPI";
import CounterArea from "../CounterArea/CounterArea";

const ThirdCounter = () => {
  const { thirdCounterValue, setThirdCounterValue } = useContext(
    ThirdCounterContext
  ) as {
    thirdCounterValue: number;
    setThirdCounterValue: Function;
  };
  console.log("RENDERED THIRD");

  return (
    <CounterArea
      counterValue={thirdCounterValue}
      onIncrease={() =>
        setThirdCounterValue((oldValue: number) => oldValue + 1)
      }
      onDecrease={() =>
        setThirdCounterValue((oldValue: number) => oldValue - 1)
      }
    />
  );
};

export default React.memo(ThirdCounter);
