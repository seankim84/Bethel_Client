import React from 'react';
import { Link } from 'react-router-dom';
import MenuDrawer from '../Drawer';
import './Header.css';

interface IProps {
    id: any,
    classname: any
};

const Header: React.SFC<IProps> = (props) => (
  <section className="Header">  
    <header>
      <div className="HeaderTop">
        <h1>
          <Link className={props.classname} to={"/"}>베델교회</Link>
        </h1>
        <div className="ShadowTop">
          <Link className={props.classname} id="ShadowTitle" to={"/"}>bethel</Link>
          <div className="ShadowDown"><MenuDrawer /></div>
      </div>
        <nav>
          <ul>
            <li>
              <Link className={props.classname} to={"/intro"}>
                교회소개
              </Link>
            </li>
            <li>
              <Link className={props.classname} to={"/team"}>
                섬기는 이
              </Link>
            </li>
            <li>  
              <Link className={props.classname} to={"/family"}>
                양육과정
              </Link>
            </li>
            <li>
              <Link className={props.classname} to={"/preach"}>
                설교영상 
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </section>
);
export default Header;