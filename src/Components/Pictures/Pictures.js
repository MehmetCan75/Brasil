import React, { Component } from 'react'
import MenuPic from './MenuPictures'

import Rj from './Estados/Rio de Janeiro/RJ'
import Sp from './Estados/Sao Paulo/SP'
import Bh from './Estados/Belo Horizonte/BH'
import Al from './Estados/Alagoas/Al'
import Sc from './Estados/Santa Catarina/Sc'
import Ce from './Estados/Ceara/Ce'
import Ba from './Estados/Bahia/Ba'

var Scroll = require('react-scroll');
var Element = Scroll.Element;



export default class Pictures extends Component {

  state = {
      listRef: [     
      {
        name: "RJ",
        title: "Rio de Janeiro",
        css: { position: 'relative',top: "-9.1vh",left: "27.5vw", width: "23vw", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      },
      {
        name: "SP",
        title: "Sao Paulo",
        css: { position: 'relative', top:"-21vh", left:"5vw", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      },
      {
        name: "BH",
        title: "Minas Gerais",
        css: { position: 'relative', top:"-36vh", left:"14vw", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      },
      {
        name: "AL",
        title: "Alagoas",
        css: { position: 'relative', top:"-56vh", left:"37vw",width:"16vw", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      },
      {
        name: "SC",
        title: "Santa Catarina",
        css: { position: 'relative', top:"-46vh", left:"14vw", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      }
      ,
      {
        name: "CE",
        title: "Ceara",
        css: { position: 'relative', top:"-86vh", left:"25vw",width:"12vw",height:"5vh", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      }
      ,
      {
        name: "BA",
        title: "Bahia",
        css: { position: 'relative', top:"-89vh", left:"21vw",width:"12vw", fontSize: "11px", color: "transparent", backgroundColor:'transparent'}
      }
    ],
    };

  render() {
    return (
      <div>
        <MenuPic listRef={this.state.listRef} />
        <Element name='RJ'><Rj></Rj></Element>
        <Element name='SP'><Sp></Sp></Element>
        <Element name='BH'><Bh></Bh></Element>
        <Element name='AL'><Al></Al></Element>
        <Element name='SC'><Sc></Sc></Element>
        <Element name='CE'><Ce></Ce></Element>
        <Element name='BA'><Ba></Ba></Element>
      </div>
    )
  }
}


