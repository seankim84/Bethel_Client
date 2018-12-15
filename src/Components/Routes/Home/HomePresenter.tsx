import React from 'react';
import Header from '../../Header'
import './Home.css';


class HomePresenter extends React.Component {
    public render() {
        return (
            <Header mainTitle="Behtel" Intro="Intro" Team="Team" Family="Family" Insight="Insight" />
        )   
    }
}

export default HomePresenter;
