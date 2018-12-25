import React from "react";
import Helmet from 'react-helmet';
import Header from "../../Header";
import './Preach.css';


interface IProps {
    handleClick:any
}

class Preach extends React.Component<IProps> {
    public render() {
        return (
        <div>
            <Helmet>
              <title>Bethel | Preach</title>
            </Helmet>
            <Header id="HeaderSection" />
            <div className="preachBody">
                <div className="preach ">
                    <div className="preachTitle">
                        <span>귀 있는 자는 들을지어다 마 / 11:15</span>
                    </div>
                </div>
                <div className ="preach2">
                    <div onClick={this.props.handleClick} id="preachBox" className="saigon">Saigon Betehl</div>
                    <div id="preachBox" className="phumyhung">Phu My Hung Bethel</div>
                    <div id="preachBox" className="airport ">Airport Bethel</div>
                    <div id="preachBox" className="hanoi">Hanoi Bethel </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Preach;
