import {  Tabs } from "antd";
import React from  'react';
import './Tab.css';

const TabPane = Tabs.TabPane;

class TabSlider extends React.Component {
    public render() {
        return (
            <div>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={"top"}
                    style={{ height: "90vh" }}
                >
                    <TabPane tab="Tab 1" key="1"><div id="Tab" className="TabBox1">Tab1</div></TabPane>
                    <TabPane tab="Tab 2" key="2"><div id="Tab" className="TabBox2">Tab2</div></TabPane>
                    <TabPane tab="Tab 3" key="3"><div id="Tab" className="TabBox3">Tab3</div></TabPane>
                    <TabPane tab="Tab 4" key="4"><div id="Tab" className="TabBox4">Tab4</div></TabPane>
                    <TabPane tab="Tab 5" key="5"><div id="Tab" className="TabBox5">Tab5</div></TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TabSlider;
