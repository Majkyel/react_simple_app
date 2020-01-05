import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Energy, Characters } from '../../pages/views/index';

const Routes = ()=> {
  return(
    <>
      <Route exact path="/" component={Home} />
      <Route path="/energy" component={Energy} />
      <Route path="/characters" component={Characters} />
    </>
  )
}

export default Routes;
