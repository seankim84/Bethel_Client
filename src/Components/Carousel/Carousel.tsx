import { Icon } from 'antd';
import React from "react";
import ReactSwipe from "react-swipe";
import "./Carousel.css";


const numberOfSlide = 4;

const paneNodes = Array.apply(null, Array(numberOfSlide)).map((_:any, i:any) => {
  if(i===0){
    return (
      <div key={i}>
        <div id="sliderBox" style={{ width: "100%", height: "100vh" }} className={`Slider${i}`}>
          <div className="introTitle">안녕하세요 베델입니다</div>
        </div>
      </div>
    ) 
  } else if (i===1){
    return <div key={i}>
      <div id="sliderBox" style={{ width: "100%", height: "100vh" }} className={`Slider${i}`}>
          <div className="introTitle">호치민부터 하노이까지 미얀마에서 아프리카까지</div>
        </div>
      </div>;
  } else if (i === 2) {
    return <div key={i}>
        <div id="sliderBox" style={{ width: "100%", height: "100vh" }} className={`Slider${i}`}>
          <div className="introTitle">세상끝날 날까지 멈추지 않습니다</div>
        </div>
      </div>;
  } else if (i === 3) {
    return <div key={i}>
      <div id="sliderBox" style={{ width: "100%", height: "100vh" }} className={`Slider${i}`}>
        <div className="introTitle">예수님만이 드러나는 교회입니다.</div>
        </div>
    </div>;
  } else {
    return null;
  }
})

const startSlide = 0;
const swipeOption = {
  auto: 3000,
  contiuous: true,
  disableScroll: true,
  speed: 1800,
  startSlide: startSlide < paneNodes.length && startSlide > 0 ? startSlide : 0
};


export default class Carousel extends React.Component {
  public ReactSwipe:any = this.ReactSwipe;

  public next () {
    this.ReactSwipe.next();
  }

  public prev() {
    this.ReactSwipe.prev();
  }

  public render(){
    return <section className="Middle">
        <ReactSwipe 
          ref={ reactSwipe => {this.ReactSwipe = reactSwipe} }
          swipeOptions={swipeOption}>
          {paneNodes}
        </ReactSwipe>
        <div className="Navigations">
          <div className="leftButton" onClick={() => this.prev()}>
            <Icon className="arrowIconLeft" type="left" />
          </div>
          <div className="rightButton" onClick={()=> this.next()}>
            <Icon className="arrowIconRight" type="right" />
          </div>
        </div>
      </section>;
  }
}   
  