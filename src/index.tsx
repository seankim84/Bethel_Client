import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./global-styles";

// apollo boost 는 graphql 과 커뮤니케이션 하는 client(grphql을 위한 redux라 생각!
ReactDOM.render( 
    <App /> ,document.getElementById('root') as HTMLElement
);
