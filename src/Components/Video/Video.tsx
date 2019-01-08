import React from 'react';
import API_KEY from '../../Components/Api';
import "./Video.css";
import VideoPresenter from './VideoPresenter';

const channelID = "UC2FkjUXW5s9r5ty8qpFFRUA";
const result = 6;
const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

export default class Video extends React.Component{

    public state = {
        items: []
    };

    public componentDidMount(){
        this.getPreach();
    }

    public renderPreach = () => {
        const items = this.state.items.map((preach: any, i: any) => {
                return(
                    <VideoPresenter
                        className={`ItemBox${i}`}
                        videoId={preach.id.videoId}
                        description={preach.snippet.description}
                        publisedAt={preach.snippet.publishedAt.substr(0, 10).replace(/-/gi,'.')}
                        title={preach.snippet.title}
                        key={i}
                    />
                )
            })
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
        return (
            this.renderPreach()
        );
    }
}