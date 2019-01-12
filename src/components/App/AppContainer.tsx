import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../../theme";
import { ThemeProvider } from "../../typed-components";
import AppPresenter from './AppPresenter';

// apollo.ts로 부터 오는 정보이다.
const AppContainer = ({ data }: any) => <React.Fragment>
    <ThemeProvider theme={theme}>
        <AppPresenter /> 
    </ThemeProvider>
    <ToastContainer draggable={true} position={"bottom-center"}/>
</React.Fragment>

export default AppContainer;