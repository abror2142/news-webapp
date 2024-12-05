import { useState } from "react";
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import LanguageBox from "./LanguageBox";
import SearchBar from "./SearchBar";

function Header({categories}){

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="nav-bar">
            {/* LOGO */}
            <Link to="/" className="header-logo">
                
            </Link>

            {/* MENU */}
            <ul className="nav-list">
                {categories && categories.map((category, index) => {
                    return (
                        <li key={"category" + index} >
                            <Link to={`/category/${category.id}`} className="no-wrap">
                                {category.category_name}
                            </Link>
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
                            icon={showMenu ? faX : faBars}
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