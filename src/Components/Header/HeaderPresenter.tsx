import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface IProps {
    mainTitle?: string;
    Intro?:string;
    Team?: string;
    Family?:string;
    Insight?:string;
}

const Header: React.SFC<IProps> = ({
    mainTitle,
    Intro,
    Family,
    Team,
    Insight
}) => (
    <section className="Header">
        <header>
            <div className="Title"><Link style={{"color":"#898989"}} to={"/"}>{mainTitle}</Link></div>
            <div className="header-Item"><Link style={{"color":"#898989"}}to={"/intro"}>{Intro}</Link></div>
            <div className="header-Item"><Link style={{"color":"#898989"}}to={"/team"}>{Team}</Link></div>
            <div className="header-Item"><Link style={{"color":"#898989"}}to={"/family"}>{Family}</Link></div>
            <div className="header-Item"><Link style={{"color":"#898989"}}to={"/insight"}>{Insight}</Link></div>
        </header>
    </section>
)

export default Header;