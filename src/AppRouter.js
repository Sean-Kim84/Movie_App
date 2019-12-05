import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header'
import Home from './components/Home';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/memo"/>
      <Route path="/download"/>
      <Route path="/contact"/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter;