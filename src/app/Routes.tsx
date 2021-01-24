import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Welcome } from 'components/common/Welcome'
import { FlightContainers } from "pages/FlightContainers";

const Routes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/flight" component={FlightContainers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;