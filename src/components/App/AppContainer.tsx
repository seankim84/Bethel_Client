import React from 'react';
import { graphql } from 'react-apollo';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

const AppContainer = ({ data }: any) => <AppPresenter isLoggedIn={ data.auth.isLoggedIn }/> // apollo.ts로 부터 오는 정보이다.

export default graphql(IS_LOGGED_IN)(AppContainer);