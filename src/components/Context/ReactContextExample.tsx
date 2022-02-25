import React from "react";

import FirstComponent from "./FirstComponent/FirstComponent";
import SecondComponent from "./SecondComponent/SecondComponent";
import ThirdComponent from "./ThirdComponent/ThirdComponent";

import { StyledReactContextExample } from "./StyledReactContextExample";
import { CounterContext } from "./ContextAPI/ContextAPI";

const ReactContextExample = () => (
  <StyledReactContextExample>
    <CounterContext.Provider
      value={{
        firstCounter: 0,
        secondCounter: 0,
        thirdCounter: 0,
      }}
    >
      <div className="title">React Context API</div>
      <div className="wrapper">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </CounterContext.Provider>
  </StyledReactContextExample>
);

export default ReactContextExample;
