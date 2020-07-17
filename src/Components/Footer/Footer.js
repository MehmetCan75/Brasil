import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (

            <div className="container">
                <h1>Pictures from Brazil</h1>
                <Link to='/pictures' className="seeMore">See more</Link>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>
        )
    }
}
