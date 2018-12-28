import { Icon } from "antd";
import React from 'react';
import Main_Worship from '../../images/Main_Worship.jpg';
import './Main.css';

interface IProps {
    mainImage?: string;
}

const Main: React.SFC<IProps> = ({

}) => (
    <section>
        <div className="MainBack">
            <img src={ Main_Worship } />
            <div className="MainText">
                <span>베델교회에 오신 것을 환영합니다</span>
                <div className="space-navigator">
                    <div className="navigator-left">
                        <Icon style={{cursor:"pointer"}} type="left" />
                    </div>
                    <div className="navigator-right">
                        <Icon style={{cursor:"pointer"}} type="right" />
                    </div>
                </div>
            </div>
        </div>   
    </section>
)

export default Main;