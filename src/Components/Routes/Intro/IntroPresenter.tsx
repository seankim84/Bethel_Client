import React from 'react';
import Helmet from 'react-helmet';
import airport from '../../../images/airportIcon.png';
import hanoi from "../../../images/hanoiIcon.png";
import hochiminh from "../../../images/hochiminhIcon.png";
import saigon from "../../../images/saigonIcon.png";
import Footer from '../../Footer';
import Header from '../../Header';

import './Intro.css';

class Info extends React.Component {
    public render(){
        return(
            <div>
            <section className="Intro">
                <Helmet><title>Bethel | Intro</title></Helmet>
                <Header id="" />
                    <div className="Introduction">
                      <div className="IntroHeader">
                        <div className="IntroExplain">
                            <h1>Intro</h1>
                            <span>여러개의 소개</span>
                        </div>
                    </div>
                </div>
                <div className="IntroBox">
                    <div className="BoxExplain">섬기는 교회</div>
                    <div className="Boxs">
                        
                        <div id="boxid" className="Box1">
                            <img src={saigon}/>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box2">
                            <img src={hochiminh}/>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box3">
                            <img src={airport}/>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box4">
                            <img src={hanoi}/>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            </div>
            
        )
    }
}

export default Info;
