import React from 'react';
import Helmet from 'react-helmet';
// import airport from '../../../images/airportIcon.png';
// import hanoi from "../../../images/hanoiIcon.png";
// import hochiminh from "../../../images/hochiminhIcon.png";
// import saigon from "../../../images/saigonIcon.png";
// import Footer from '../../Footer';
import Header from '../../Header';
import Minister from "../../Minister";
import TabSlider from '../../Tab';

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
                            <p>We are Bethel</p>
                        </div>
                    </div>
                </div>
                <div className="IntroBox">
                        <p>베델 교회는 세계선교와 베트남 복음 전도를 위해 설립 되었습니다</p>
                        <p>그 사역을 위해 지속적으로 교회를 세워 하나님의 복음이 확장 되는데 필요한 전진 기지가 되도록 나갈 것입니다</p>
                    <div className="Boxs">
                        <div id="boxid" className="Box1">
                            <div className="BoxBackground">
                                <a className="svgTarget" target="blank" href="https://www.google.com/maps/place/%EB%B2%A0%EB%8D%B8%EA%B5%90%ED%9A%8C/@10.7738986,106.67774,16.71z/data=!4m5!3m4!1s0x31752f21323042f1:0xce93d104d13da15b!8m2!3d10.7738468!4d106.680171"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M21 24h-18v-4.144l4-3.536v-3.9l5-4.42 5 4.42v3.904l4 3.536v4.14zm-8-1v-3c0-.552-.448-1-1-1s-1 .448-1 1v3h2zm2-1h4v-1.239l-4-3.535v-3.905l-3-2.652-3 2.652v3.901l-4 3.535v1.243h4v-2c0-1.656 1.344-3 3-3s3 1.344 3 3v2zm3-8.849l6 5.356-1.328 1.493-4.672-4.184v-2.665zm-12 0l-6 5.356 1.328 1.493 4.672-4.184v-2.665zm7 2.849h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2zm0-14h2v2h-2v.751l7 6.249-1.328 1.493-6.672-5.975-6.672 5.975-1.328-1.493 7-6.22v-.78h-2v-2h2v-2h2v2z"/></svg></a>
                                </div>
                            <div className="BoxTitle">
                                <span>Saigon</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box2">
                            <div className="BoxBackground">
                                <a className="svgTarget" target="blank" href="https://www.google.com/maps/place/Bethel+Church/@10.7307967,106.7065117,21z/data=!4m8!1m2!2m1!1zUzUwLTEgU2t5IEdhcmRlbiAyLCBQaOG6oW0gVsSDbiBOZ2jhu4ssIFAuVMOibiBQaG9uZywgUS43LCBUcC5IQ00sIFZpdGVuYW0!3m4!1s0x31752fef1f5df9c7:0x70eed531a007e9a2!8m2!3d10.7308634!4d106.7066981"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M24 24h-24v-2h1v-7c-.014-.563-.427-.985-1-1v-5h2v2h2v-2h2v3h1v-6h2v2h2v-8l5 2-4 2v2h1v2h2v-2h2v6h1v-3h2v2h2v-2h2v5c-.523 0-.982.392-1 .999v7.001h1v2zm-11-1v-4c0-.552-.448-1-1-1s-1 .448-1 1v4h2zm2-13h-6v4h-5v-1h-1.764c.509.587.746 1.218.764 1.975v7.025h6v-3c0-1.656 1.344-3 3-3 1.655 0 3 1.345 3 3v3h6v-7.026c.019-.748.251-1.389.764-1.974h-1.764v1h-5v-4zm-8 9h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2zm12 0h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2zm-6-5h-2v-2c0-.552.448-1 1-1s1 .448 1 1v2z"/></svg></a>
                                </div>
                            <div className="BoxTitle">
                                <span>Phu My Hung</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box3">
                            <div className="BoxBackground">
                                <a className="svgTarget" target="blank" href="https://goo.gl/maps/fk2o6J9YC9H2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg></a>
                                </div>
                            <div className="BoxTitle">
                                <span>Airport</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                        <div id="boxid" className="Box4">
                            <div className="BoxBackground">
                                <a className="svgTarget" target="blank" href="https://www.google.com/maps/place/Hanoi+Bethel+Church/@21.0286836,105.7799285,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab4cd4c609df:0x4d5733435648516e!8m2!3d21.0286786!4d105.7821172"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M11 3v-3h4v2h-3v1h6v3h2v2h3v14h1v2h-24v-2h1v-14h3v-2h2v-3h5zm3 20v-5l-2-1-2 1v5h4zm2-18h-8v3h-2v2h-3v12h5v-5l4-2.336 4 2.336v5h5v-12h-3v-2h-2v-3zm2 13h2v2h-2v-2zm-14 0h2v2h-2v-2zm14-3h2v2h-2v-2zm-14 0h2v2h-2v-2zm14-3h2v2h-2v-2zm-14 0h2v2h-2v-2zm8-5c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1h-1v3h3v-1h-2v-2z"/></svg></a>
                                </div>
                            <div className="BoxTitle">
                                <span>Hanoi</span>
                                <span>Bethel Church</span>
                            </div>
                        </div>
                    </div>
                    <div className="TabBox">
                        <TabSlider />
                    </div>
                    <div className="MinisterBox">
                        <Minister />
                    </div>
                </div>
                
            </section>
            
            </div>
            
        )
    }
}

export default Info;
