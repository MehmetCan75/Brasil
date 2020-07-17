import React from "react";
// import "../styles/Header.css";
import './MenuPictures.css'

var Scroll = require("react-scroll");
var scroller = Scroll.scroller;

const MenuPic = (props) => {
  const handleScrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -59, // Scrolls to element + 50 pixels down the page
    });
  };


  return (
    <div className="MenuPics">
    <p className="ClickOnAState" value="Click on a State"></p>
      <div className="">
        <div className="elementToScroll">
          {props.listRef.map((ref, i) => (
            <span className="states"
              style={ref.css}
              key={i}
              onClick={() => handleScrollTo(ref.name)}
            >
              {ref.title}
              
            </span>
          ))}
        </div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuPic;