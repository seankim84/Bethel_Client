import  { Dropdown ,Icon, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface IProps {
    id: any;
};

const menu = (
  <Menu>
    <Menu.Item>
      <Link className="link" to={"/intro"}>
        Intro
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="link" to={"/team"}>
        Team
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="link" to={"/family"}>
        Family
      </Link>
    </Menu.Item>
    <Menu.Item>
        <Link className="link" to={"/preach"}>
                Preach
    </Link>
    </Menu.Item>
        
  </Menu>
);

const Header: React.SFC<IProps> = props => (
  <section id={props.id} className="Header">
    <header>
      <div className="HeaderTop">
        <h1>
          <Link className="HeaderTitle" to={"/"}>Bethel</Link>
        </h1>
        <div className="ShadowTop">
            <Link className="ShadowTitle" to={"/"}>bethel</Link>
        <Dropdown className="ShadowDown" overlay={ menu }>
          <a href="#">
            <Icon className="dropDown" type="menu-fold" />
          </a>
        </Dropdown>
      </div>
        <nav>
          <ul>
            <li>
              <Link className="link" to={"/intro"}>
                Intro
              </Link>
            </li>
            <li>
              <Link className="link" to={"/team"}>
                Team
              </Link>
            </li>
            <li>
              <Link className="link" to={"/family"}>
                Family
              </Link>
            </li>
            <li>
              <Link className="link" to={"/preach"}>
                Preach
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </section>
);
export default Header;