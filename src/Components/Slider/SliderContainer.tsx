import React from 'react';
import Slider from 'react-slick';
// import SliderPresenter from './SliderPresenter';
import  data from '../data';


export default class SliderContainer extends React.Component {

    public state = {
        activeSlide: 0,
        activeSlide2: 0,
        oldSlide:0
       
    }

    public render(){
        const settings = {
            
            arrows:true,
            dotClass: "sdf",
            dots: true,
            infinite: true,
            slidesToScroll: 3,
            slidesToShow: 3,
            speed: 500,
        };
        return <div>
            <Slider {...settings}>
              {data.properties.map(proper => <div key={proper.index}>
                  <img style={{ width: "30vw", height: "30vh" }} src={proper.picture} />
                </div>)}
            </Slider>
          </div>;
    }
}