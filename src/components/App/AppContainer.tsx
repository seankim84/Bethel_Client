import React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from './AppQueries';

const AppContainer = ({ data }: any) => <div> {JSON.stringify(data)} </div>; // Queries로 부터의 data

export default graphql(IS_LOGGED_IN)(AppContainer);