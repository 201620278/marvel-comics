import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import Creators from '../pages/Creators';
import EventsPg from '../pages/EventsPg';
import Series from '../pages/Series';
import Stories from '../pages/Stories';
import Maps from '../pages/Maps/AppMaps';

const Routes: React.FC = () => (
  <Switch>
    <Route path={"/"} exact component={Comics} />
    <Route path="/characters" component={Characters} />
    <Route path="/comics" component={Comics} />
    <Route path="/creators" component={Creators} />
    <Route path="/events" component={EventsPg} />
    <Route path="/series" component={Series} />
    <Route path="/stories" component={Stories} />
    <Route path="/maps" component={Maps} />
  </Switch>
);
export default Routes;
