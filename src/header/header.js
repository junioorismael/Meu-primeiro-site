import React from "react";
import './header.css';
import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'
import youtube from '../icons/youtube.png'

const Header = () => {
    return (
        <header className="site-header">
                <div className="site-headerinlineContent"></div>
                <div className="site-headerinlineContent-gridContent">
                    <div className="header-list">
                        <ul>
                        <li><button className="header-button"><img src={facebook} alt="img-facebook"/></button>
                        </li>
                        <li><button className="header-button"><img src={instagram} alt="img-instagram"/></button></li>
                        <li><button className="header-button"><img id="header-button-img" src={youtube} alt="img-youtube"/></button></li>
                        </ul>
                    </div>
                    <span >Histórias fascinantes</span>
                </div>
        </header>
    )
}

export default Header;