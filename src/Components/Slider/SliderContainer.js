import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';
import  data from '../data';
import './Slider.css';


class SliderContainer extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }
  render() {

    const props = {
      autoplay: false,   
      dots: false,
      infinite: true, 
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <div className="CarouselContainer">
        <Carousel ref={node => this.carousel = node } {...props}>
          {data.properties.map(proper => (
            <div key={proper.index} className='properBox'>
              <div className={`proper${proper.index}`}>
                <div className="properDescription">{proper.description}</div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="properButton">
          <div onClick={this.previous}>
            <Icon className="properLeft" type="left" />
          </div>
          <div onClick={this.next}>
            <Icon className="properRight" type="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default SliderContainer;