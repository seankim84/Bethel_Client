import React from 'react';
import  GoogleMap from '../../Components/Map';
import './Contact.css'

const ContactPresenter: React.SFC = ({}) => (
  <div>
    <section className="Contact">
      <GoogleMap />
    </section>
  </div>
);

export default ContactPresenter;