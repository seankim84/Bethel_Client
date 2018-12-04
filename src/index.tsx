import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import client from "./apollo";
import App from "./components/App";

ReactDOM.render( // apollo boost 는 graphql 과 커뮤니케이션 하는 client(grphql을 위한 redux라 생각!
  <ApolloProvider client={client}> 
    <App />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
