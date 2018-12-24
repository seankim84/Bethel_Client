import axios from 'axios';
import React from "react";
import Preach from './PreachPresenter';

const API_KEY = "AIzaSyCf68ynB_ICL9JALyWK0AtaUKC848cMRHI";
const channelID = "UC2FkjUXW5s9r5ty8qpFFRUA";
const result = 10;

const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`



class PreachContainer extends React.Component {
    constructor(props:any){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this)
    }

    public clicked(){
        console.log('clicked')
        axios.get(finalURL)
            .then(response => { console.log(response); }) // SUCCESS
            .catch(response => { console.log(response); }); // ERROR
    }

  public render() {
    return (
        <div>
            <Preach />
            <button onClick={this.clicked}>Get Youtube</button>
        </div>
    )
  }
}

export default PreachContainer;
