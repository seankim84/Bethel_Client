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
                <Icon className="facebookIcon" type="facebook" />
                <Icon className="instagramIcon" type="instagram" />
            </div>
        </footer>
        </div>
    ) 
}

export default Footer;