import React, {useState, useEffect} from 'react'
import './Header.css'
import House from './open-menu.png'
import {Link} from 'react-router-dom'

export default function Navbar() {


    const [largeur, setLargeur] = useState(window.innerWidth)
    const [toggleMenu,setToggleMenu] = useState(false)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changewidth = () => {
            setLargeur(window.innerWidth)

            if(window.innerWidth > 500) {
                setToggleMenu(false)
            }
        }

        window.addEventListener('resize', changewidth)

        // return () => {
        //     window.removeEventListener('resize', changewidth)
        // }
    })

    const sideDrawer =(props) => {
        let closed = 'SideDrawer Close'
        if (props.open) {
            closed = 'SideDrawer Open'
        }

    return (
        <div className="header">
            <nav>
            {/* SHORT CIRCUIT OPERATOR */}
            {( largeur > 500 || toggleMenu) && (
                <div className="liste">
                    <div className="items"><Link to="/">Home</Link></div>
                    <div className="items"><Link to="/pictures">Pictures</Link></div>
                    <div className="items">Contact</div>
                </div>
            )}
            </nav>
            <div className="cel-screen">
            <Link to="/"><div className="eye-Brasil"></div></Link>
            <div className='btn' onClick={toggleNavSmallScreen}><img src={House} alt="hamb-icon" className="hamb-icon"/></div>
            </div>
        </div>
    )
}
}