import { Drawer, Icon } from "antd";
import React from 'react';
import { Link } from "react-router-dom";
import './Drawer.css';


class MenuDrawer extends React.Component {
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
                <div className="MenuDrawer">
                  <Icon className="MenuIcon" type="align-left" onClick={this.showDrawer} />
                </div>
                <Drawer 
                    className="DrawerItems" 
                    placement={"top"} 
                    closable={false} 
                    onClose={this.onClose} 
                    visible={this.state.visible}
                    height={80}
                    >
                <div className="DrawerItems">
                  <Link to={"/intro"}>Intro</Link>
                  <Link to={"/team"}>Team</Link>
                  <Link to={"/family"}>Family</Link>
                  <Link to={"/preach"}>Preach</Link>
                </div>
                </Drawer>
            </div>
        );
    }
}

export default MenuDrawer;