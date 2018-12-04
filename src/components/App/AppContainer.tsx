import React from 'react';
import { graphql } from 'react-apollo';
import reset from 'styled-reset';
import theme from "../../theme";
import { createGlobalStyle, ThemeProvider } from "../../typed-components";
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

// tslint:disable-next-line
createGlobalStyle`
    ${reset}
`;

// apollo.ts로 부터 오는 정보이다.
const AppContainer = ({ data }: any) => <ThemeProvider theme={theme}>
    <AppPresenter isLoggedIn={ data.auth.isLoggedIn }/> 
</ThemeProvider>

export default graphql(IS_LOGGED_IN)(AppContainer);