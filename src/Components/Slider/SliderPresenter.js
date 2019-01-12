import React, { Component } from 'react';
import data from  '../data';
import './Slider.css';

const SliderPresenter = () => {
    return data.properties.map(proper => (
        <div >
            {proper.description}
        </div>
    )
        
        )
};
    

export default SliderPresenter;