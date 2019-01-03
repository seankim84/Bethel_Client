import React from 'react';
import Helmet from 'react-helmet';
import Footer from "../../Footer";
import Header from '../../Header';
import './Family.css';



class Family extends React.Component {
    public render() {
        return (
          <div>
            <section className="Family">
              <Helmet><title>Bethel | Family</title></Helmet>
              <Header classname="HeaderColor" id="" />
              <div className="Familination">
                    <div className="FamilyHeader">
                        <div className="FamilyExplain">
                            <h1>Family</h1>
                            <span>가족들</span>
                        </div>
                    </div>
                </div>
                <div className="FamilyMain">
                    <div className="FamilyMainHeader">
                        <h1>Family Pictures</h1>
                        <p>Family Span</p>
                    </div>
                    <div className="FamilyPictures">
                            <div id="boxId" className="PictureBox1"><a target="_blank" href="https://freefrontend.com/css-timelines/">혜연</a></div>
                                <div id="boxId" className="PictureBox1">2</div>
                                <div id="boxId" className="PictureBox1">3</div>
                                <div id="boxId" className="PictureBox1">4</div>
                                <div id="boxId" className="PictureBox1">5</div>
                                <div id="boxId" className="PictureBox1">6</div>
                            </div>
                    </div>
            </section>
            <Footer />
          </div>
        );
    }
}

export default Family;