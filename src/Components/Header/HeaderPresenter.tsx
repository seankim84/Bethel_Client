import { Col, Row } from "antd";
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
    mainTitle,
    Intro,
    Family,
    Team,
    Insight
}) => (
    <div>
        <Row className="Header">
          <Col span={4}>{mainTitle}</Col>
          <Col span={4}>{Intro}</Col>
          <Col span={4}>{Team}</Col>
          <Col span={4}>{Family}</Col>
          <Col span={4}>{Insight}</Col>      
        </Row>
    </div>
)

export default Header;