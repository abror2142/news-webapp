import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";


function SearchBar(){
    const [show, setShow] = useState(false)
    return (
        <div className={show ? "search-bar open" : "search-bar"}>
            {show && 
                <form className="search-form">
                    <input type="text" className="search-input" />
                </form>
            }
            <div 
                className={show ? "search-box action-box open" : "search-box action-box"}
                onClick={() => setShow((prev) => !prev)}
            >
                <FontAwesomeIcon 
                    icon={show ? faX : faSearch}
                    className="icon"
                />
            </div>
        </div>
    )
}

export default SearchBar