import React, { useMemo, useState } from "react";

import FirstComponent from "./FirstComponent/FirstComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

import { StyledReactContextExample } from "./StyledReactContextExample";
import { CounterContext } from "./ContextAPI/ContextAPI";
import { ThirdCounterContext } from "./ContextAPI/ThirdCounterContextAPI";

const ReactContextExample = () => {
  const [counterValues, setCounterValues] = useState({
    firstCounter: 0,
    secondCounter: 0,
  });

  const [thirdCounterValue, setThirdCounterValue] = useState(0);

  const globalStateFirstTwo = useMemo(
    () => ({ counterValues, setCounterValues }),
    [counterValues]
  );

  const globalStateThird = useMemo(
    () => ({ thirdCounterValue, setThirdCounterValue }),
    [thirdCounterValue]
  );

  return (
    <StyledReactContextExample>
      <CounterContext.Provider value={globalStateFirstTwo}>
        <ThirdCounterContext.Provider value={globalStateThird}>
          <div className="title">React Context API</div>
          <div className="wrapper">
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
          </div>
        </ThirdCounterContext.Provider>
      </CounterContext.Provider>
    </StyledReactContextExample>
  );
};

export default ReactContextExample;
