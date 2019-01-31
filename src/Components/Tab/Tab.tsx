import {  Tabs } from "antd";
import React from  'react';
import './Tab.css';

const TabPane = Tabs.TabPane;

class TabSlider extends React.Component {
    public render() {
        return <div>
            <Tabs defaultActiveKey="1" tabPosition={"bottom"} style={{}}>
              <TabPane className="Taborder" tab="2005.5" key="1">
                <div id="Tab" className="TabBox1">
                  <div className="TabIntro">
                    <h2>2005.5</h2>
                    <span>사이공 베델교회 창립</span>
                    <p>
                      호치민 시내에 자리잡고 있는 사이공 베델교회는
                      시내와 안푸 지역에 살고 있는 한인 디아스포라 영혼을 위해 세워진 교회입니다
                      살아있는 예배와 역동적인 말씀이 넘치는 공동체 입니다
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane className="Taborder" tab="2008.8" key="2">
                <div id="Tab" className="TabBox2">
                  <div className="TabIntro">
                    <h2>2008.8</h2>
                    <span>푸미흥 베델교회 창립</span>
                    <p>
                      푸미흥 한인지역 스카이가든에 외국인 최초로 허가를 받은 교회입니다
                      푸미흥 지역에 사는 한인 디아스포라 영혼을 위해 세워진 교회입니다
                      현대적인 예배모습과 체계적인 성경공부를 통해 건강한 영혼을 세워나가는 공동체입니다
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane className="Taborder" tab="2011.3" key="3">
                <div id="Tab" className="TabBox3">
                  <div className="TabIntro">
                    <h2>2011.3</h2>
                    <span>공항 베델교회 창립</span>
                    <p>
                      공항지역과 12군에사는 다문화가정을 위해 세위진 교회입니다
                      다문화가정 아이들을 위해 주일학교를 운영하며 
                      다문화센터를 통해 복음 전도를 실천하는 공동체입니다
                    </p>
                  </div>
                </div>
              </TabPane>
              <TabPane className="Taborder" tab="2012.10" key="4">
                <div id="Tab" className="TabBox4">
                  <div className="TabIntro">
                    <h2>2012.10</h2>
                    <span>하노이 베델교회 창립</span>
                    <p>
                      하노이 한인지역인 미딩 지역에서 한인 디아스포라 영혼을 위해 세워진 교회입니다
                      체계적인 주일학교 시스템과 단계별 성경공부를 통해 
                      그리스도를 닮아가는 것을 목표로 하는 공동체입니다
                    </p>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>;
    }
}

export default TabSlider;
