
import React from "react";
import Preach from "./PreachPresenter";


const API_KEY = "AIzaSyCf68ynB_ICL9JALyWK0AtaUKC848cMRHI";
const channelID = "UC2FkjUXW5s9r5ty8qpFFRUA";
const result = 10;

const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

interface IProps {
    match: any
}

interface IState {
    resultyt: any
}



class PreachContainer extends React.Component<IProps,IState> {
    constructor(props:any){
        super(props);
        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this)
    }

    public clicked(){
        fetch(finalURL)
            .then(response => response.json())// SUCCESS
            .then(responseJson => {
                const resultyt = responseJson.items.map((obj:any) => "https://www.youtube.com/embed/"+obj.id.videoId);
                this.setState({resultyt});
                console.log(resultyt)
            })
            .catch(response => { console.log(response) }); // ERROR
    }

  public render() {
    return (
        <div>
            <Preach handleClick={this.clicked} /> 
                    <div>
                        {this.state.resultyt.map((link:any, i:any) => {
                          console.log(link);
                          const frame = <div key={i}>
                              <iframe width="560px" height="315px" src={link} frameBorder="0" allowFullScreen={true}>
                                youtube
                              </iframe>
                            </div>;
                          return frame;
                        })}
                </div>
                
        </div>
    );
  }
}

export default PreachContainer;
