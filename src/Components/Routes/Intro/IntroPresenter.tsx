import React from 'react';
import Helmet from 'react-helmet';
// import airport from '../../../images/airportIcon.png';
// import hanoi from "../../../images/hanoiIcon.png";
// import hochiminh from "../../../images/hochiminhIcon.png";
// import saigon from "../../../images/saigonIcon.png";
import Footer from '../../Footer';
import Header from '../../Header';

import './Intro.css';

class Info extends React.Component {
    public render(){
        return(
            <div>
            <section className="Intro">
                <Helmet><title>Bethel | Intro</title></Helmet>
                <Header classname="IntroColor" id="" />
                    <div className="Introduction">
                      <div className="IntroHeader">
                        <div className="IntroExplain">
                            <h1>Intro</h1>
                            <p>여러개의 소개</p>
                        </div>
                    </div>
                </div>
                <div className="IntroBox">
                    <p>카카오벤처스는 선행기술, 서비스, 게임 등 ICT 및 소프트웨어 분야의 스타트업에 집중 투자합니다.</p>
                    <p>주로 초기 기업(Seed)부터 성장단계(Series A)에 있는 스타트업에 투자하며, 좋은 역량을 갖춘 팀이라면 시기에 관계 없이 투자합니다.</p>
                    <div className="Boxs">
                        <div id="boxid" className="Box1">
                            <div className="BoxBackground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 3v-3h4v2h-3v1h6v3h2v2h3v14h1v2h-24v-2h1v-14h3v-2h2v-3h5zm3 20v-5l-2-1-2 1v5h4zm2-18h-8v3h-2v2h-3v12h5v-5l4-2.336 4 2.336v5h5v-12h-3v-2h-2v-3zm2 13h2v2h-2v-2zm-14 0h2v2h-2v-2zm14-3h2v2h-2v-2zm-14 0h2v2h-2v-2zm14-3h2v2h-2v-2zm-14 0h2v2h-2v-2zm8-5c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1h-1v3h3v-1h-2v-2z"/></svg></div>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box2">
                            <div className="BoxBackground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M24 24h-24v-2h1v-7c-.014-.563-.427-.985-1-1v-5h2v2h2v-2h2v3h1v-6h2v2h2v-8l5 2-4 2v2h1v2h2v-2h2v6h1v-3h2v2h2v-2h2v5c-.523 0-.982.392-1 .999v7.001h1v2zm-11-1v-4c0-.552-.448-1-1-1s-1 .448-1 1v4h2zm2-13h-6v4h-5v-1h-1.764c.509.587.746 1.218.764 1.975v7.025h6v-3c0-1.656 1.344-3 3-3 1.655 0 3 1.345 3 3v3h6v-7.026c.019-.748.251-1.389.764-1.974h-1.764v1h-5v-4zm-8 9h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2zm12 0h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2zm-6-5h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2z"/></svg></div>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box3">
                            <div className="BoxBackground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg></div>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box4">
                            <div className="BoxBackground"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 3v-3h4v2h-3v1h6v3h2v2h3v14h1v2h-24v-2h1v-14h3v-2h2v-3h5zm3 20v-5l-2-1-2 1v5h4zm2-18h-8v3h-2v2h-3v12h5v-5l4-2.336 4 2.336v5h5v-12h-3v-2h-2v-3zm2 13h2v2h-2v-2zm-14 0h2v2h-2v-2zm14-3h2v2h-2v-2zm-14 0h2v2h-2v-2zm14-3h2v2h-2v-2zm-14 0h2v2h-2v-2zm8-5c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1h-1v3h3v-1h-2v-2z"/></svg></div>
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
