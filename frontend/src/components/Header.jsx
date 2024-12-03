import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faBars, faSearch} from "@fortawesome/free-solid-svg-icons";

import LanguageBox from "./LanguageBox";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Header({categories}){
    console.log(categories)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="nav-bar">
            {/* LOGO */}
            <div className="header-logo">
                
            </div>

            {/* MENU */}
            <ul className="nav-list">
                {categories && categories.map((element, index) => {
                    return (
                        <li key={"category" + index} >
                            <a href="#" className="no-wrap">
                                {element.category_name}
                            </a>
                        </li>
                    )
                })}
            </ul>

            {/* ACTION BUTTONS */}
            <div className="header-action-box">
                <LanguageBox />
                
                <SearchBar />

                <div className="menu-box">
                    <div 
                        className="menu-box action-box"
                        onClick={() => setShowMenu((prev) => !prev)}
                    >
                        <FontAwesomeIcon 
                            icon={faBars}
                            className="icon"
                            />
                    </div>
                </div>
            </div>
            {
                showMenu &&
                <div className="menu">
                    
                </div>
            }
        </nav>
    )
}

export default Header