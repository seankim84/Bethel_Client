import React from 'react';
import {Link} from 'react-router-dom';
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
            <h1><Link className="linkTitle" to={'/'}>Bethel</Link></h1>
            <nav>
                <ul>
                    <li><Link className="link" to={'/intro'}>Intro</Link></li>
                    <li><Link className="link" to={'/team'}>Team</Link></li>
                    <li><Link className="link" to={'/family'}>Family</Link></li>
                    <li><Link className="link" to={'/preach'}>Preach</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    </section>   
)
export default Header;