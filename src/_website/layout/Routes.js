import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Power, Characters } from '../../pages/index';

const Routes = ()=> {
  return(
    <>
      <Route exact path="/" component={Home} />
      <Route path="/power" component={Power} />
      <Route path="/characters" component={Characters} />
    </>
  )
}

export default Routes;
