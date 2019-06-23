import { Icon } from "antd";
import React from 'react';
import './Footer.css';

const Footer: React.SFC = () => {
    return(
        <div>
        <footer className="Footer">
            <div className="footerExplain">
                <span>Vietnam Bethel Church</span>
                <span>&copy;CopyRight All rights reserved Bethel</span>
            </div>
            <div className="footerIcon">
                <a style={{color: "white" }} target="blank" href="https://www.facebook.com/profile.php?id=100035318116109"><Icon style={{ fontSize:"2.5rem" }}type="facebook" /></a>
                <a style={{color: "white" }} target="blank" href="https://www.instagram.com/sangjin6432/"><Icon style={{ fontSize:"2.5rem" }}type="instagram" /></a>
            </div>
        </footer>
        </div>
    ) 
}

export default Footer;