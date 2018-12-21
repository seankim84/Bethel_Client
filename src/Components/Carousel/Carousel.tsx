import React from "react";
import ReactSwipe from "react-swipe";

export const Carousel = () => {
  let reactSwipeEl: any;

  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ 
            auto: 3000,  
            continuous: true,
            speed:1500 }}
            ref={el => (reactSwipeEl = el)}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: "100vh",
            width: "100vw",  
          }}
        >
          PANE 1
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: "100vh",
            width: "100vw"
          }}
        >
          PANE 2
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: "100vh",
            width: "100vw"
          }}
        >
          PANE 3
        </div>
      </ReactSwipe>
      <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
    </div>
  );
};
