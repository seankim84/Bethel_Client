import React from 'react';
import Header from '../../Header'
import Info from "../../Info";
import Mission from '../../Mission';
import './Home.css';


class HomePresenter extends React.Component {
    public render() {
        return (
            <div>
                <div className="Whole">
                    <Header mainTitle="Behtel" Intro="Intro" Team="Team" Family="Family" Insight="Insight" />
                    <Info />
                    <Mission />
                </div>
            </div>
        )   
    }
}

export default HomePresenter;
