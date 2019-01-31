import React from "react";
import Helmet from 'react-helmet';
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
              <div className="PeopleExplain ">
                <h1>Team</h1>
                <p>All Ministers</p>
              </div>
            </div>

             <h1>Hochiminh</h1>
            <div className="MinisterBox">
              <div id="minister1" className="Minister"><p>1</p></div>
              <div id="minister2" className="Minister"><p>2</p></div>
              <div id="minister3" className="Minister"><p>3</p></div>
            </div>
            
            <h1>Hanoi</h1>
            <div className="MinisterBox">
              <div id="minister4" className="Minister">1</div>
              <div id="minister5" className="Minister">2</div>
            </div>
          </div>
        </section>
      </div>;
  }
}

export default Team;
