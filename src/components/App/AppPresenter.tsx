import PropTypes from "prop-types";
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import EditAccount from '../Routes/EditAccount';
import EmailLogin from '../Routes/EmailLogin';
import Home from '../Routes/Home';
import OutHome from '../Routes/OutHome';
import SocialLogin from '../Routes/SocialLogin';
interface IProps {
    isLoggedIn: boolean
};

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => <BrowserRouter>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes /> }</BrowserRouter>

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={OutHome} />
    <Route path={"/email-login"} component={EmailLogin} />
    <Route path={"/social-login"} component={SocialLogin} />
    <Redirect from={"*"} to={"/"} /> 
  </Switch>
); // Redirect는 무조건 맨 끝에 붙인다

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/edit-account"} exact={true} component={EditAccount} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
); 

AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export  default AppPresenter;