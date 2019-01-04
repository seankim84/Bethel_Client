import { Icon } from "antd";
import React from 'react';
import './Footer.css';

const Footer: React.SFC = () => {
    return(
        <div>
        <footer className="Footer">
            <div className="footerExplain">
                <span>&copy;CopyRight All rights reserved Bethel</span>
            </div>
            <div className="footerIcon">
                <div><Icon className="facebookIcon" type="facebook" /></div>
                <div><Icon className="instagramIcon" type="instagram" /></div>
            </div>
        </footer>
        </div>
    ) 
}

export default Footer;