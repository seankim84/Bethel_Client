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
}) => (
    <section className="Header">
    <header>
        <div className="HeaderTop">
            <h1>Bethel</h1>
            <nav>
                <ul>
                    <li>Intro</li>
                    <li>Team</li>
                    <li>Family</li>
                    <li>Insight</li>
                </ul>
            </nav>
        </div>
    </header>
    </section>   
)
export default Header;