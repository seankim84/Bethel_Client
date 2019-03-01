import React from "react";
import Helmet from 'react-helmet';
import Sang from  '../../../images/김상훈목사님.jpeg';
import Kim from '../../../images/김일경목사님.jpeg';
import Lee from '../../../images/이성근목사님.jpeg';
import Zi from '../../../images/이지균목사님.jpeg';
import Jang  from '../../../images/장상진목사님.jpeg';
import Footer from '../../Footer';
import Header from '../../Header';


import './Team.css';

class Team extends React.Component {
  public render() {
    return <div>
        <section className="Team">
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
                      <img style={{width:"100%",height:"100%", borderRadius:"20px"}}src={Kim} alt="김일경 목사" />
                      <figcaption>
                        <p>
                          1955년생 <br />
                          인터내셔널 신학교와 <br />
                          퍼시픽 림 신학교에서 공부 <br /> 
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
                      푸미흥 베델교회에 오신것을 환영합니다
                    </span>
                  </div>
                </div>

                <div className="MinisterBox">
                  <figure className="snip1283">
                  <img style={{width:"100%",height:"100%", borderRadius:"20px"}}src={Lee} alt="이성근 목사" />
                  <figcaption>
                    <p>
                      1955년생 <br />
                      인터내셔널 신학교와 <br />
                      퍼시픽 림 신학교에서 공부 <br /> 
                      하와이 펄하버 침례교회에서 30여년 사역 <br /> 
                      현재 KTEE MINISTRY 국제부 <br /> 
                      이사장으로 사역 중
                    </p>
                  </figcaption>
                </figure>
                  <div className="MinisterExplain">
                    <h3>이성근 목사</h3>
                    <p>사이공 베델교회 담당</p>
                    <span>
                      사이공 베델교회에 오신것을 환영합니다
                    </span>
                  </div>
                </div>

                <div className="MinisterBox">
                  <figure className="snip1283">
                  <img style={{width:"100%",height:"100%", borderRadius:"20px"}} src={Jang} alt="장상진 목사" />
                  <figcaption>
                    <p>
                      1983년생 <br /> 
                      호치민 대학교 베트남학과를 졸업 <br /> 
                      미드웨스턴 신학대학원 과정을 이수 중<br /> 
                      2012년 전도사로 임명<br />
                      청년부 / 다문화 가정 사역<br />
                      2018년 남침례교 목사 안수<br />
                    </p>
                  </figcaption>
                </figure>
                  <div className="MinisterExplain">
                    <h3>장상진 목사</h3>
                    <p>공항 베델교회 담당</p>
                    <span>
                      공항 베델교회에 오신것을 환영합니다
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="Team2">
          <div className="MinisterTitle">
            <h1>하노이 교회</h1>
          </div>
          <div className="HochiminhMinister">
                <div className="MinisterBox">
                  <div className="MinisterImage">
                    <figure className="snip1283">
                      <img style={{width:"100%",height:"100%", borderRadius:"20px"}}src={Zi} alt="이지균 목사" />
                      <figcaption>
                        <p>
                          1961년생<br /> 
                          미국 미죠리 주 SBU 대학 졸업<br /> 
                          1994년 사우스웨스턴침례신학대학원 졸업<br />
                          남침례교단 목사 안수<br />
                          워싱턴주목회 / 미원주민 선교(22년)<br /> 
                          2017년 하노이베델교회 담당목사
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="MinisterExplain">
                    <h3>이지균 목사</h3>
                    <p>하노이 베델교회 담당</p>
                    <span>
                      하노이 베델교회에 오신것을 환영합니다
                    </span>
                  </div>
                </div>

                <div className="MinisterBox">
                  <div className="MinisterImage">
                    <figure className="snip1283">
                      <img style={{width:"100%",height:"100%", borderRadius:"20px"}}src={Sang} alt="김상훈 목사" />
                      <figcaption>
                         <p>
                          1970년 출생<br />
                          1996년 침례신학 대학교 신학과 졸업<br />
                          1999년 목회대학원(M.Div) 졸업 <br />
                          2002년 목사안수 <br />
                          동상제일교회 / 예일교회 부목사 <br /> 
                          침례교여선교연합회 청소년교육 부장 <br />
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
                      하노이 베델교회에 오신것을 환영합니다
                    </span>
                  </div>
                </div>
                </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>;
  }
}

export default Team;
