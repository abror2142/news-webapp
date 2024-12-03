import { useState } from "react";

function SearchBar(){
    const [show, setShow] = useState(false)
    return (
        <div className="search-bar">
            {show && 
                <input type="text" className="search-input" />
            }
            <div 
                className="search-box action-box"
                onClick={() => setShow((prev) => !prev)}
            >
                <FontAwesomeIcon 
                    icon={faSearch}
                    className="icon"
                />
            </div>
        </div>
    )
}

export default SearchBar