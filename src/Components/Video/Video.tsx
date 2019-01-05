import React from 'react';
import ReactSwipe from "react-swipe";
import API_KEY from '../../Components/Api';
import "./Video.css";

import VideoPresenter from './VideoPresenter';

const channelID = "UC2FkjUXW5s9r5ty8qpFFRUA";
const result = 5;
const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

const startSlide = 0;
const swipeOption = {
    auto: 1000,
    contiuous: true,
    disableScroll: true,
    speed: 1000,
    startSlide: startSlide < 5 && startSlide > 0 ? startSlide : 0
};

class Video extends React.Component{

    public state = {
        items: []
    };

    public ReactSwipe: any = this.ReactSwipe;

    public next() {
        this.ReactSwipe.next();
    }

    public prev() {
        this.ReactSwipe.prev();
    }

    public componentDidMount(){
        this.getPreach();
    }

    public renderPreach = () => {
        const items = Array.apply(this.state.items, Array(result)).map(
          (preach: any, i: number) => {
              if(i===0){
                  return(
                      <div key={i}>
                      <VideoPresenter
                          id="boxId"
                          className={`itemBox${i}`}
                          videoId={preach.id.videoId}
                          key={i}
                          description={preach.snippet.description}
                          title={preach.snippet.title}
                      />
                      </div>
                  )
              } else if(i===1){
                  return(
                      <div key={i}>
                      <VideoPresenter
                          id={"boxId"}
                          className={`itemBox${i}`}
                          videoId={preach.id.videoId}
                          key={i}
                          description={preach.snippet.description}
                          title={preach.snippet.title}
                      />
                      </div>
                  )
              } else if (i === 1) {
                  return (
                      <div key={i}>
                      <VideoPresenter
                          id={"boxId"}
                          className={`itemBox${i}`}
                          videoId={preach.id.videoId}
                          key={i}
                          description={preach.snippet.description}
                          title={preach.snippet.title}
                      />
                      </div>
                  )
              } else if (i === 1) {
                  return (
                      <div key={i}>
                      <VideoPresenter
                          id={"boxId"}
                          className={`itemBox${i}`}
                          videoId={preach.id.videoId}
                          key={i}
                          description={preach.snippet.description}
                          title={preach.snippet.title}
                      />
                      </div>
                  )
              } else {
                  return (
                      <div key={i}>
                      <VideoPresenter
                          id={"boxId"}
                          className={`itemBox${i}`}
                          videoId={preach.id.videoId}
                          key={i}
                          description={preach.snippet.description}
                          title={preach.snippet.title}
                      />
                      </div>
                  )
              }
            } 
        )
        return items;
    }

    public getPreach = async () => {
        const items = await this.callApi()
        this.setState({
            items
        });
    };

    public callApi = () => {
        return fetch(finalURL).then(response => response.json())
            .then(responseJson => responseJson.items)
            .catch(err => { console.log(err) });
    };

    public render() {
        const  { items }  = this.state;
        return (
            <div className={items ? "App" : "App-loading"}>
                {items ? <ReactSwipe
                    ref={reactSwipe => { this.ReactSwipe = reactSwipe }}
                    swipeOptions={swipeOption}
                >{this.renderPreach()}</ReactSwipe>: "Loading"}
            </div>
        )
    }
}

export default Video;