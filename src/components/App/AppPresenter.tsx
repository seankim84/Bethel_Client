import PropTypes from "prop-types";
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import EditAccount from '../Routes/EditAccount';
import EmailLogin from '../Routes/EmailLogin';
import Home from '../Routes/Home';
import Intro from '../Routes/Intro';
import OutHome from '../Routes/OutHome';
import SocialLogin from '../Routes/SocialLogin';

interface IProps {
    isLoggedIn: boolean
};

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={OutHome} />
    <Route path={"/email-login"} exact={true} component={EmailLogin} />
    <Route path={"/social-login"} exact={true} component={SocialLogin} />
    <Redirect from={"*"} to={"/"} exact={true} />
  </Switch>
); // Redirect는 무조건 맨 끝에 붙인다

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/edit-account"} exact={true} component={EditAccount} />
    <Route path={"/intro"} exact={true} component={Intro} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
); 

AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export  default AppPresenter;