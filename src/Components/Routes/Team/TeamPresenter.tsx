import React from "react";
import Helmet from 'react-helmet';
import Jang from '../../../images/jangsanggin.jpeg';

import Sang from  '../../../images/kimsanghun.jpeg';
import Lee from '../../../images/leeseong.jpeg';
import Zi from '../../../images/leeziguen.jpeg';
import Footer from '../../Footer';
import Header from '../../Header';


import './Team.css';

class Team extends React.Component {
  public render() {
    return <div>
        <div className="Team">
          <Helmet>
            <title>Bethel | Team</title>
          </Helmet>
          <Header classname="TeamColor" id="" />
          <div className="People">
            <div className="PeopleHeader">
              <div className="PeopleExplain">
                <h1>Team</h1>
                <p>All Ministers</p>
              </div>
            </div>

             <div className="MinisterTitle">
               <h1>호치민 교회</h1>
              </div>

              <div className="HochiminhMinister">
                <div className="MinisterBox">
                  <div className="MinisterImage">
                    <figure className="snip1283">
                  <img style={{ width: "100%", height: "100%", borderRadius: "20px" }} src={'http://drive.google.com/uc?export=view&id=1XVndaXMhu6F6kgUJda5YeBROnSjQOvcL'} alt="김일경 목사" />
                      <figcaption>
                          <p>
                            인터내셔널 / 퍼시픽림 <br />
                            신학교에서 공부 <br /> 
                            하와이 펄하버 침례교회에서 30여년 사역 <br /> 
                            현재 KTEE MINISTRY 국제부 <br /> 
                            이사장으로 사역 중
                          </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="MinisterExplain">
                    <h3>김일경 목사</h3>
                    <p>푸미흥 베델교회 담당</p>
                    <span>
                      또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라<br />
                      그들이 또 다른 사람들을 가르칠 수 있으리라<br />
                      (디모데후서 2:2) 바울이 디모데에게<br />
                      디모데가 충성된 사람들에게<br />
                      충성된 사람들이 또 다른 사람들에게 그리스도의 복음을 전한 것처럼<br />
                      푸미홍 베델교회도 이 목표를 향해 나아갑니다
                    </span>
                  </div>
                </div>

                <div className="MinisterBox">
                  <figure className="snip1283">
                  <img style={{width:"100%", height:"auto", borderRadius:"20px"}} src={Lee} alt="이성근 목사" />
                  <figcaption>
                    <p>
                      총신대학교 신학대학원 <br />
                      목회학 <br/>
                      총신대학교 대학원에서 <br />
                      역사신학((Th.M) 공부 <br /> 
                      한국에서 20년간 목회 <br />
                      사역 후<br/>
                      사이공베델교회에 부임 <br />
                    </p>
                  </figcaption>
                </figure>
                  <div className="MinisterExplain">
                    <h3>이성근 목사</h3>
                    <p>사이공 베델교회 담당</p>
                    <span>
                      할렐루야!  <br />
                      이곳에서   <br />
                      함께 하나님을 예배하고  <br />
                      함께 신앙생활하며  <br />
                      함께 주님의 뜻을 이루어가는 교회가 되기를 소망합니다
                    </span>
                  </div>
                </div>

                <div className="MinisterBox">
                  <figure className="snip1283">
                  <img style={{width:"100%",height:"100%", borderRadius:"20px"}} src={Jang} alt="장상진 목사" />
                  <figcaption>
                    <p>
                      호치민대학교 베트남학과 <br /> 
                      미드웨스턴 신학대학원 과정을 이수 중<br /> 
                      2012 전도사로 임명<br />
                      청년  / 다문화 가정 사역<br />
                      2018 남침례교 목사 안수<br />
                    </p>
                  </figcaption>
                </figure>
                  <div className="MinisterExplain">
                    <h3>장상진 목사</h3>
                    <p>푸미흥 베델교회 담당</p>
                    <span>
                      샬롬!<br />
                      기도와 말씀으로 세워져 가는 교회!<br />
                      주님의 평강과 기쁨이 넘치는 교회!<br />
                      베델교회에 오신 모든 분들을 주님의 이름으로 축복합니다.
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="Team2">
          <div className="MinisterTitle">
            <h1>하노이 교회</h1>
          </div>
          <div className="HanoiMinister">
                <div className="MinisterBox">
                  <div className="MinisterImage">
                    <figure className="snip1283">
                      <img style={{width:"100%",height:"100%", borderRadius:"20px"}} src={Zi} alt="이지균 목사" />
                      <figcaption>
                        <p>
                          미국 미죠리 주 SBU <br />
                          대학 졸업<br /> 
                          1994 사우스웨스턴<br />
                          침례신학대학원 졸업<br />
                          남침례교단 목사 안수<br />
                          워싱턴주목회 / 미원주민 선교(22년)<br /> 
                          2017 하노이베델교회<br />
                          담당목사
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="MinisterExplain">
                    <h3>이지균 목사</h3>
                    <p>하노이 베델교회 담당</p>
                    <span>
                      하노이베델교회는 <br />
                      하나님의 사랑과 말씀이 <br />
                      우리의 삶속애서 나타나며 <br />
                      증거 되어지는 공동체입니다<br />
                    </span>
                  </div>
                </div>

                <div className="MinisterBox">
                  <div className="MinisterImage">
                    <figure className="snip1283">
                      <img style={{width:"100%",height:"100%", borderRadius:"20px"}} src={Sang} alt="김상훈 목사" />
                      <figcaption>
                         <p>
                          1996 침례신학교 신학과 졸업<br />
                          1999 목회대학원(M.Div) 졸업 <br />
                          2002 목사안수 <br />
                          동상제일교회 / 예일교회 부목사 <br /> 
                          2012년 소풍교회 개척 <br />
                          2016년 베델교회 사역 <br />
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="MinisterExplain">
                    <h3>김상훈 목사</h3>
                    <p>하노이 베델교회 담당</p>
                    <span>
                      주님의 기쁨이 되며..<br />
                      주님의 사랑을 누리며..<br />
                      주님의 사명을 이뤄가는..<br />
                      베델교회의 공동체가 되신 모든 분들을<br />
                      주님의 이름으로 사랑하고 축복합니다
                    </span>
                  </div>
                </div>
                </div>
        </div>
        <section className="MinisterFooter">
          <Footer />
        </section>
      </div>;
  }
}

export default Team;
