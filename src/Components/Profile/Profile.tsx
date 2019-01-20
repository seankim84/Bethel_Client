import {  Col, Divider, Drawer, Row } from "antd";
import React from  'react';

const pStyle = {
    color: "rgba(0,0,0,0.85)",
    display: "block",
    fontSize: 16,
    lineHeight: "24px",
    marginBottom: 16
};

const DescriptionItem = ({ content, title}:any) => (
  <div
    style={{
      color: "rgba(0,0,0,0.65)",
      fontSize: 14,
      lineHeight: "22px",
      marginBottom: 7
    }}
  >
    <p
      style={{
        color: "rgba(0,0,0,0.85)",
        display: "inline-block",
        marginRight: 8
      }}
    >
      {title}:
    </p>
    {content}
  </div>
);

class Profile extends React.Component {
    public state = { visible: false };

    public showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    public onClose = () => {
        this.setState({
            visible: false,
        });
    };

    public render() {
        return (
            <div>
                <div onClick={this.showDrawer}>ViewMore</div>    
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
                    <p style={pStyle}>Personal</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Full Name" content="Lily" />{' '}
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Account" content="AntDesign@example.com" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="City" content="HangZhou" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Country" content="China🇨🇳" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Website" content="-" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things as simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p style={pStyle}>Company</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Position" content="Programmer" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Department" content="AFX" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p style={pStyle}>Contacts</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Email" content="AntDesign@example.com" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={(
                                    <a href="http://github.com/ant-design/ant-design/">
                                        github.com/ant-design/ant-design/
                  </a>
                                )}
                            />
                        </Col>
                    </Row>
                </Drawer>
            </div>
        );
    }
}

export default Profile;