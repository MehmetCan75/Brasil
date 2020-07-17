import React, { Component } from "react";

import '../../MenuPictures.css'

import IMG from './Alagaos Pictures/Al1.jpg'
import IMG2 from './Alagaos Pictures/Al2.jpg'
import IMG3 from './Alagaos Pictures/Al3.jpg'

class Al extends Component {
  state={
    showPicture: false,
    displayPics: true
  }

  showPics = () => {
    this.setState({showPicture: !this.state.showPicture, displayPics:!this.state.displayPics})
  }


  ScrollTo = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  // this.setState({showPicture: !this.state.showPicture})
}

  render() {
    let pics = this.state.showPicture
    return (
      <div className="contImage">
        <button onClick={this.showPics} className="showPicsBtn">{this.state.displayPics === true ? "Show the pictures" : "Hide the pictures"}</button>
        <p>Alagoas</p>
        {pics === true ? 
        <div className="pic">  
        <div key="key1"><img src={IMG} alt=""/></div>
        <div key="key2"><img src={IMG2} alt=""/></div>
        <div key="key3"><img src={IMG3} alt=""/></div>
        </div>
        : null
        
        } 
        <button onClick={this.ScrollTo} className="backButton"></button>
        </div>
    );
  }
}

export default Al;