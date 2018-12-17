import { Icon } from 'antd';
import React from 'react';
import './Info.css';

const Info: React.SFC = () => (
    <section className="Info">
        <div className="WholeBox">
            <div className="BoxLeft">
                <p>VISION</p>
                <Icon type="arrow-left" />
            </div>
            <div className="BoxRight">
                <p>VALUE</p>
                <Icon type="arrow-right" />
            </div>
        </div>
    </section>
)

export default Info;