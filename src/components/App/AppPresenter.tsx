import PropTypes from "prop-types";
import React from 'react';

interface IProps {
    isLoggedIn: boolean
};

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
   ( isLoggedIn ? 
   <span>You are LoggedIn</span> 
    : <span>You are Out</span>)
   )

AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export  default AppPresenter;