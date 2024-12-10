import { useState } from "react";
import { Link } from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import LanguageBox from "./LanguageBox";
import SearchBar from "./SearchBar";

function Header({categories}){

    function handleLinkClick () {
        setShowMenu(false)
    }

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
                        <div>
                            <li key={"category" + index} >
                                <Link to={`/category/${category.id}`} className="no-wrap">
                                    {category.category_name}
                                </Link>
                            </li>
                            {index != categories.length-1 &&  <hr /> }
                        </div>
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
                    <div className="menu-tags">
                        <Link className="tag-button" onClick={handleLinkClick}>#So'nggi Yangiliklar</Link>
                        <Link className="tag-button" onClick={handleLinkClick}>#Dolzarb Xabarlar</Link>
                        <Link className="tag-button" onClick={handleLinkClick}>#Muhim Xabarlar</Link>
                        <Link className="tag-button" onClick={handleLinkClick}>#Muahrrir Tanlovi</Link>
                    </div>
                    <hr />
                    <div className="menu-tags">
                        <Link className="tag-button" onClick={handleLinkClick}>#Kun Xabari</Link>
                        <Link className="tag-button" onClick={handleLinkClick}>#Hayotiy Voqealar</Link>
                    </div>
                    <hr />
                    <div className="menu-add">
                        <Link onClick={handleLinkClick}>Rekalam</Link>
                        <Link onClick={handleLinkClick}> Bog'lanish</Link>
                    </div>
                    <hr />
                    <div className="menu-conf">
                        <div>Light Mode</div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Header