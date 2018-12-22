import React from "react";
import ReactSwipe from "react-swipe";
import "./Carousel.css";


const numberOfSlide = 4;
const paneNodes = Array.apply(null, Array(numberOfSlide)).map((_:any, i:any) => {
      return (
          <div key={i}>
            <div style={{width: "100%", height: "100vh"}} className={`Slider${i}`}>안녕하세요 bethel 입니다.</div>
          </div>
    )
})

const startSlide = 0;
const swipeOption = {
  auto: 3000,
  contiuous: true,
  disableScroll: true,
  speed: 1800,
  startSlide: startSlide < paneNodes.length && startSlide > 0 ? startSlide : 0
};

export default class Carousel  extends React.Component {
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
        <div style={{ width:"100vw",height:"100vh",textAlign: "center" }}>
          <button type="button" onClick={() => this.prev()}>
            Prev
          </button>
          <button type="button" onClick={()=> this.next()}>
            Next
          </button>
        </div>
      </section>;
  }
}   
  