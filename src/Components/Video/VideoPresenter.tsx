import React from 'react';
import './Video.css';

interface IProps  {
    title: string,
    description: string,
    videoId: string,
    className: string,
    id:string 
}

const VideoPresenter:React.SFC<IProps> = (props) => {
    return <div className={props.className} id={props.id}>
          <h1>{props.title}</h1>
          <span>{props.description}</span>
        <iframe width="560px" height="315px" src={"https://www.youtube.com/embed/" + `${props.videoId}`} frameBorder="0" allowFullScreen={true} />
      </div>;
}

export default VideoPresenter;