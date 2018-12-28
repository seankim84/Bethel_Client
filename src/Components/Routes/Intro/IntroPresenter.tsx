import React from 'react';
import Helmet from 'react-helmet';
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
                <div>
                    <div className="Introduction">
                    <div className="IntroHeader">
                        <div className="IntroExplain">
                            <h1>Intro</h1>
                            <span>여러개의 소개</span>
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
