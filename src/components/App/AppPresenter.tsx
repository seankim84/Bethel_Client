// import PropTypes from "prop-types";
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import EditAccount from '../Routes/EditAccount';
// import EmailLogin from '../Routes/EmailLogin';
import Family from '../Routes/Family'
import Home from '../Routes/Home';
import Intro from '../Routes/Intro';
import Preach from '../Routes/Preach';
// import SocialLogin from '../Routes/SocialLogin';
import Team from '../Routes/Team';

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <LoggedInRoutes/> 
  </BrowserRouter>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/edit-account"} exact={true} component={EditAccount} />
    <Route path={"/intro"} exact={true} component={Intro} />
    <Route path={"/team"} exact={true} component={Team} />
    <Route path={"/family"} exact={true} component={Family} />
    <Route path={"/preach"} exact={true} component={Preach} />
    <Route path={"/:isParams"} exact={true} component={Preach} />
    <Redirect from={"*"} to={"/"} />
    <Redirect from={"*"} to={"/"} exact={true} />
  </Switch>
); // Redirect는 무조건 맨 끝에 붙인다


export  default AppPresenter;