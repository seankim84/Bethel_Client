import {  Tabs } from "antd";
import React from  'react';
import './Tab.css';

const TabPane = Tabs.TabPane;

class TabSlider extends React.Component {
    public render() {
        return <div>
            <Tabs defaultActiveKey="1" tabPosition={"bottom"} style={{}}>
              <TabPane tab="2005.5" key="1">
                <div id="Tab" className="TabBox1">
                  <div className="TabIntro">
                    <h2>2005.5</h2>
                    <span>사이공 베델교회 창립</span>
                    <p>
                      Lorem ipsum dolor site amet, consectetur adipscing
                      elit, sed do eisumod tempor incididut ut labore et
                      dolore magna aliqua. Ut enim ad mimim venjam, quis
                      nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="2008.8" key="2">
                <div id="Tab" className="TabBox2">
                  <div className="TabIntro">
                    <h2>2008.8</h2>
                    <span>푸미흥 베델교회 창립</span>
                    <p>
                      Lorem ipsum dolor site amet, consectetur adipscing
                      elit, sed do eisumod tempor incididut ut labore et
                      dolore magna aliqua. Ut enim ad mimim venjam, quis
                      nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="2011.3" key="3">
                <div id="Tab" className="TabBox3">
                  <div className="TabIntro">
                    <h2>2011.3</h2>
                    <span>공항 베델교회 창립</span>
                    <p>
                      Lorem ipsum dolor site amet, consectetur adipscing
                      elit, sed do eisumod tempor incididut ut labore et
                      dolore magna aliqua. Ut enim ad mimim venjam, quis
                      nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="2012.10" key="4">
                <div id="Tab" className="TabBox4">
                  <div className="TabIntro">
                    <h2>2012.10</h2>
                    <span>하노이 베델교회 창립</span>
                    <p>
                      Lorem ipsum dolor site amet, consectetur adipscing
                      elit, sed do eisumod tempor incididut ut labore et
                      dolore magna aliqua. Ut enim ad mimim venjam, quis
                      nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="2014.11" key="5">
                <div id="Tab" className="TabBox5">
                  <div className="TabIntro">
                    <h2>2014.11</h2>
                    <span>미얀마 양곤 베델교회 창립</span>
                    <p>
                      Lorem ipsum dolor site amet, consectetur adipscing
                      elit, sed do eisumod tempor incididut ut labore et
                      dolore magna aliqua. Ut enim ad mimim venjam, quis
                      nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>;
    }
}

export default TabSlider;
