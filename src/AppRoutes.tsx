import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {
  Dashboard,
  MobXExample,
  ReactContextExample,
  ReduxExample,
} from "./components";

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/mobx">
        <MobXExample />
      </Route>
      <Route exact path="/redux">
        <ReduxExample />
      </Route>
      <Route exact path="/context">
        <ReactContextExample />
      </Route>
    </Switch>
  </Router>
);

export default AppRoutes;
