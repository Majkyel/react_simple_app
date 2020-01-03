import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Api } from '../../pages/views/index';

const Routes = ()=> {
  return(
    <>
      <Route exact path="/" component={Home} />
      <Route path="/api" component={Api} />
    </>
  )
}

export default Routes;
