import React from 'react';
import './Video.css';

interface IProps  {
    title: string,
    description: string,
    videoId: string,
    className: string,
    key: any;
}

const VideoPresenter:React.SFC<IProps> = (props) => {
    return (
        <div id="VideoPresenterBox" className={props.className}>
          <div className="VideoFrame">
            <iframe className="innerFrame" src={"https://www.youtube.com/embed/" + `${props.videoId}`} frameBorder="0" allowFullScreen={true} />
          </div>
          <div className="ViedoExplain">
            <h3>[ {props.title} ]</h3>
            <p>{props.description}</p>
            <div className="VideoSpan">
                <span>공항 베델교회 장상진 목사</span>
            </div>
          </div>
      </div>
      );
}

export default VideoPresenter;