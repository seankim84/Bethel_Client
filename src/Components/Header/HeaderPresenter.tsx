import { Icon } from 'antd';
import React from 'react';
import './Header.css';

interface IProps {
    mainTitle?: string;
    Intro?:string;
    Team?: string;
    Family?:string;
    Insight?:string;
}

const Header: React.SFC<IProps> = ({
    mainTitle
}) => (
    <section className="Header">
    <header>
        <div className="HeaderTop">
            <h1>{mainTitle}</h1>
            <nav>
                <ul>
                    <li>Intro</li>
                    <li>Team</li>
                    <li>Family</li>
                    <li>Insight</li>
                </ul>
            </nav>
        </div>
        <div className="HeaderMiddle">
            <Icon className="ArrowIcon" type="left" />
            <span className="MiddleText">안녕하세요 베델교회입니다</span>
            <Icon className="ArrowIcon" type="right" />
        </div>
        <div className="HeaderBottom">
            <Icon className ="ArrowIcon" type="down"/>
        </div>
    </header>
    </section>
)

export default Header;