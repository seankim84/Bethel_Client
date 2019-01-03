import React from "react";
import Helmet from 'react-helmet';
import Footer from '../../Footer';
import Header from '../../Header';
import './Team.css';

class Team extends React.Component {
  public render() {
    return (
      <div>
      <section className="Team">
      <Helmet><title>Bethel | Team</title></Helmet>
      <Header classname="TeamColor" id="" />
        <div className="People">
          <div className="PeopleHeader">
            <div className="PeopleExplain ">
              <h1>Team</h1>
              <p>다양한 팀과 전문성이 모여 최고의 팀워크를 만듭니다.</p>
            </div>
          </div>
          <div className="PeopleBox">
            <div id="Box" className="PeopleBox1">Paul Han</div>
            <div id="Box" className="PeopleBox2">Jang San Gin</div>
            <div id="Box" className="PeopleBox3">Lee ji Guen</div>
            <div id="Box" className="PeopleBox4">Kim Hyeon Gyu</div>
            <div id="Box" className="PeopleBox5">Lee Seong Guen</div>
            <div id="Box" className="PeopleBox6">Jeong Han Bin</div>
          </div>
        </div>
          

      </section>
      <Footer />
      </div>
      );
  }
}

export default Team;
