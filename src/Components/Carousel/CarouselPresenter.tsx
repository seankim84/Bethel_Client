import { Icon } from "antd"
import React from "react";
import Slider from 'react-slick';

import "./Carousel.css";

class Middle extends React.Component{
  public render() {

    const SampleNextArrow = (props:any) => {
        const { onClick, className, style } = props;
        return (
            <div className={className} onClick={onClick} style={{...style}}>
                <Icon style={{fontSize: "2rem", color:"red"}} type="arrow-right" />
            </div >
        )
    }

    const SamplePrevArrow = (props:any) => {
        const { onClick, className, style } = props;
        return (
            <div className={className} onClick={onClick} style={{ ...style }}>
                <Icon style={{ fontSize: "2rem", color:"red" }} type="arrow-left" />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500
    }
    return (
       <section className="Middle">
        <div style={{}}>
            <Slider {...settings }>
                <div className="CarouselBox1">1</div>
                <div className="CarouselBox2">2</div>
                <div className="CarouselBox3">3</div>
                <div className="CarouselBox4">4</div>
            </Slider>
        </div>
       </section>
    );
  }
}

export default Middle;