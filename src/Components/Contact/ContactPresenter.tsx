import React from 'react';
import  Footer from '../Footer';
import './Contact.css'

const ContactPresenter: React.SFC = ({}) => (
  <div>
  <section className="Contact">
    <div className="ContactTitle">
        <h1>Contact Us</h1>
        <p style={{color: "#000000"}}>S50-1 Sky Garden 2, Phạm Văn Nghị, P.Tân Phong, Q.7, Tp.HCM, Vitenam</p>
    </div>
    <div className="Map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.00286753078922!2d106.7064955476992!3d10.73094483470305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fef1f5df9c7%3A0x70eed531a007e9a2!2sBethel+Church!5e0!3m2!1sko!2s!4v1545114549213" />
    </div>
    <div>
    <Footer />
    </div>
  </section>
  </div>
);

export default ContactPresenter;