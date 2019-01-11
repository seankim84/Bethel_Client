import React from 'react';
// import paul  from '../../images/paul.jpeg';
import './Minister.css';


export const Minister:React.SFC = () => {
    return <div className="minister">
        <div className="col-1">
          <h1>About Bethel</h1>
          <span>안녕하세요 베델교회 담임목사 폴한입니다</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
          </p>
        </div>
        <div className="col-2">
            <div className="ministerImage" style={{color: '#ffffff'}}>a</div>
        </div>
      </div>;
};