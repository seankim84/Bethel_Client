import React from 'react';
import Contact from "../../Contact";
import Header from "../../Header";
import Info from "../../Info";
import Intro from '../../Intro';
import Mission from '../../Mission';
import './Home.css';

class HomePresenter extends React.Component {
    public render() {
        return (
            <div>
                <div className="Whole">
                    <Header classname="" id={null}/>
                    <Intro />
                    <Info />
                    <Mission />
                    <Contact />
                </div>
            </div>
        )   
    }
}

export default HomePresenter;
