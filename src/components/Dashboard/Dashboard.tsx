import React from "react";
import { useHistory } from "react-router-dom";
import { StyledDashBoard } from "./StyledDashboard";

export const Dashboard = () => {
  const history = useHistory();
  return (
    <StyledDashBoard>
      <div className="dashboard">
        <div className="dashboard__title">What you will see:</div>
        <ol>
          <li
            className="dashboard__route"
            onClick={() => history.push("/context")}
          >
            Context
          </li>
          <li
            className="dashboard__route"
            onClick={() => history.push("/mobx")}
          >
            Mobx
          </li>
          <li
            className="dashboard__route"
            onClick={() => history.push("/context")}
          >
            Redux
          </li>
        </ol>
      </div>
    </StyledDashBoard>
  );
};

export default Dashboard;
