import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Welcome } from 'components/common/Welcome'
import { FlightContainers } from "pages/FlightContainers";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/flight" component={FlightContainers} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;