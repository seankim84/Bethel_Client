import React from 'react';
import Helmet from 'react-helmet';
import Footer from "../../Footer";
import Header from '../../Header';
import Kakao from '../../Kakao';
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
                    <div className="ProperExplain">
                        <h1>어제보다 오늘 더 사랑하는 베델 가족을 소개합니다</h1>
                    </div>
                    <div><Slider /></div>
                    <div><Kakao  /></div>
                    <Footer />  
                </div>
            </section>
                
          </div>
        );
    }
}

export default Family;