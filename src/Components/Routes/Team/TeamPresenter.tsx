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
              <p>All Ministers</p>
            </div>
          </div>
          <div className="PeopleBox">
            <div id="Box" className="PeopleBox1">
                <div className="overlay">
                  <span>#장상진 목사</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
            <div id="Box" className="PeopleBox2">
                <div className="overlay">
                  <span>#장상진 목사</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
            <div id="Box" className="PeopleBox3">
              <div className="overlay">
                <span>#장상진 목사</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
            <div id="Box" className="PeopleBox4">
                <div className="overlay">
                  <span>#장상진 목사</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
            <div id="Box" className="PeopleBox5">
                <div className="overlay">
                  <span>#장상진 목사</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
            <div id="Box" className="PeopleBox6">
                <div className="overlay">
                  <span>#장상진 목사</span>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
          </div>
        </div>
          

      </section>
      <Footer />
      </div>
      );
  }
}

export default Team;
