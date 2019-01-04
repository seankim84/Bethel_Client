import React from 'react';
import Mission1 from '../../images/mission1.jpeg';
import Mission2 from "../../images/mission2.jpeg";
import Mission3 from "../../images/mission3.jpeg";
import Mission4 from "../../images/mission4.jpeg";
import Mission5 from "../../images/mission5.jpeg";
import './Mission.css';

const Mission: React.SFC = ({}) => (
    <div>
  <section className="Mission">
    <div className="MissionTitle ">
      <h1>Mission</h1>
      <p>예수님만을 따르는 베델교회</p>
    </div>
    <div className="PhotoBox">
      <div id="PhotoChild" className="PhotoChild1">
        <img src={Mission1} alt="Missionary"/>
      </div>
      <div id="PhotoChild" className="PhotoChild2">
        <img src={Mission2} alt="Missionary"/>
      </div>
      <div id="PhotoChild" className="PhotoChild3">
        <img src={Mission3} alt="Missionary"/>
      </div>
      <div id="PhotoChild" className="PhotoChild4">
        <img src={Mission4} alt="Missionary"/>
      </div>
      <div id="PhotoChild" className="PhotoChild5">
        <img src={Mission5} alt="Missionary"/>
      </div>
      <div id="PhotoChild" className="PhotoChild6">
        <img src={Mission1} alt="Missionary"/>
      </div>
    </div>
  </section>
  </div>
);

export default Mission;