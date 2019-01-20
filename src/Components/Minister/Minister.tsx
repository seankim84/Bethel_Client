import React from 'react';
// import paul  from '../../images/paul.jpeg';
import './Minister.css';


export const Minister:React.SFC = () => {
    return <div className="minister">
        <div className="col-1">
          <h1>Senior Pastor</h1>
          <span>안녕하세요 베델교회 담임목사 폴한입니다</span>
          <p>
            베델교회는 가서 모든 족속에게 복음을 전하라는 예수님의 명령에 순종하기 위해<br /> 
            2005년 5월1일, 베트남 호치민에  세워졌습니다<br />
            지난 14년간 하나님께서 베델 공동체에 부어주신 은혜는 크고도 놀라웠습니다<br />
            호치민, 하노이, 미얀마, 아프리카 케냐까지 교회를 세우고<br /> 
            원주민들에게 복음을 전하며 주님이 주신 선교의비전을<br /> 
            이루기 위해 달려왔고 지금도 그 비전을 향해 끊임없이 달려가고 있습니다<br />
            우리 주님이 오실 때까지 배우고 가르치며<br /> 
            성령님의 인도하심으로 열방을 향해 나가며 베델에 주신 주님의 비젼을 계속 이루어 갈 것입니다<br />
          </p>
          <strong>Paul Han</strong>
        </div>
        <div className="col-2">
            <div className="ministerImage" style={{color: '#ffffff'}}>a</div>
        </div>
      </div>;
};