import { Icon } from 'antd';
import React from "react";
import Helmet from 'react-helmet';
import Footer from '../../Footer';
import Header from "../../Header";
import Video from '../../Video';
import './Preach.css';

class Preach extends React.Component {
    public render() {
        return <div>
            <section className="Preach">
              <Helmet>
                <title>Bethel | Preach</title>
              </Helmet>
              <Header classname="preachColor" id="" />
              <div className="Preachs">
                <div className="PreachHeader ">
                  <div className="PreachExplain">
                    <h1>Preach</h1>
                    <p>귀 있는 자는 들을지어다 마 / 11:15</p>
                  </div>
                </div>
              </div>
              <div className="PreachBox">
                <div className="PreachIntro">
                    <div className="PreachTitle">베델공동체 설교</div>
                    <div className="PreachLink">
                    <button type="button" className="PreachBoxButton">
                    <a href="https://www.youtube.com/channel/UCMurc2-6NyhD9z4y06i4m6g" target="blank" style={{textDecoration: "none", color:"black"}}>
                        <Icon style={{ color: "red" }}type="youtube" /> Move to the Channel
                        </a>
                    </button>
                    </div>
                </div>
                <div id="box" className="PreachBox1">
                  <Video />
                </div>
              </div>
            </section>
            <section>
              <Footer />
            </section>
           
          </div>;
    }
}

export default Preach;
