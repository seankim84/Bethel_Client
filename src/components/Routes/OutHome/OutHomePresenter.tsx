import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from '../../../typed-components';

const Container = styled.div`
body {
    font-size: 10px;
}
`

interface IProps extends RouteComponentProps<any> {}

const OutHomePresenter: React.SFC<IProps> = ({}) => <div className={Container}>This is Sean</div>;

export default OutHomePresenter;