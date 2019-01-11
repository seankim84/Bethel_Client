import React from 'react';
import Helmet from 'react-helmet';
import Footer from "../../Footer";
import Header from '../../Header';
import Slider from '../../Slider';
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
                            <span>We are the One</span>
                        </div>
                    </div>
                </div>
                <div className="FamilyMain">
                    <div><Slider /></div>
                </div>
            </section>
                <Footer />
          </div>
        );
    }
}

export default Family;