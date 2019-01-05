import React from "react";
import Helmet from 'react-helmet';
import Footer from '../../Footer';
import Header from "../../Header";
import Video from '../../Video';
import './Preach.css';

class Preach extends React.Component {
    public render() {
        return (
            <div>
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
                        <div id="box" className="PreachBox1">
                            <Video />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Preach;
