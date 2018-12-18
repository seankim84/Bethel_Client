import { Icon } from 'antd';
import React from 'react';
import './Info.css';

const Info: React.SFC = () => (
  <section className="Info">
    <div className="InfoTitle">
      <h1>Philociphy</h1>
      <p>
        베델은 이런 가치를 지향합니다. 여러분들과 이런여정을 떠나고 싶습니다.
      </p>
    </div>
    <div className="WholeBox">
      <div  className="BoxLeft">
        <p>VISION</p>
        <Icon type="arrow-left" />
      </div>
      <div className="BoxRight">
        <p>VALUE</p>
        <Icon type="arrow-right" />
      </div>
    </div>
  </section>
);

export default Info;