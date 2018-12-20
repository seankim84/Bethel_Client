import React from 'react';
import Carousel from '../../Carousel';
import Contact from '../../Contact';
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
                    <Carousel />
                    <Info />
                    <Mission />
                    <Contact />
                </div>
            </div>
        )   
    }
}

export default HomePresenter;
