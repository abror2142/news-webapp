import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBell, faGear} from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <div className="admin-header">
            <h1 className="admin-header-title">Admin Panel</h1>
            <div className="admin-header-lright">
                <div className="admin-header-box">
                    <div>
                        <FontAwesomeIcon 
                            icon={faBell} 
                            className="admin-header-icon"
                        />
                    </div>
                    <p>Messages</p>
                </div>
                <div className="admin-header-box">
                    <div>
                        <FontAwesomeIcon 
                            icon={faGear} 
                            className="admin-header-icon"
                        />
                    </div>
                    <p>Settings</p>
                </div>
                <div className="admin-header-box">
                    <div>
                        <div className="admin-header-icon">
                        </div>
                    </div>
                    <p>john123</p>
                </div>
            </div>
        </div>
    )
}


export default Header