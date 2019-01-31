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
                <Icon style={{ fontSize:"2.5rem" }}type="facebook" />
                <Icon style={{ fontSize:"2.5rem" }}type="instagram" />
            </div>
        </footer>
        </div>
    ) 
}

export default Footer;