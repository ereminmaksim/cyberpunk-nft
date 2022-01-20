import "./Header.css"
import React from 'react';

// import cyberLogo from "../assets/header/cryptopunk-logo.png"
// import cyberLogo from "../assets/header/header_logo.png"
// import cyberLogo from "../assets/header/header_cyberpunk_logo.png"
import cyberLogo from "../../assets/header/header_cyberpunk_logo.png_2.png"
import searchIcon from "../../assets/header/search.png"
import themeSwitchIcon from "../../assets/header/theme-switch.png"


const Header = (props) => {
    return (
        <div className='header'>

            <div className='header_logo'>
                <img src={cyberLogo} className="cyberLogo" alt="logo"/>
            </div>

            <div className='header_search_container'>
                <div className="header_searchIcon">
                    <img src={searchIcon} alt="search"/>
                </div>
                <input className="header_search_input" type="text" placeholder="search"/>
            </div>

            <div className="header_items">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="header_actions">
                <div className="header_actions_switch">
                    <img src={themeSwitchIcon} alt="switch"/>
                </div>
            </div>

            <div className="header_login">Get In</div>
        </div>

    );
}

export default Header;