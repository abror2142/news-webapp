import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";


function CreatePost(){
    return (
        <div>
            <Header />
            {/* Content */}
            <div className="admin-page-content">
                <div className="admin-page-left">
                    <div>
                        <div className="admin-page-left-btn">
                           <p>All Posts</p> 
                           <div>0</div>
                        </div>

                        <div className="admin-page-left-btn">
                           <p>Drafts</p> 
                           <div>0</div>
                        </div>

                        <div className="admin-page-left-btn">
                           <p>Create New Post <FontAwesomeIcon icon={faPlus}/></p> 
                        </div>
                    </div>
                </div>

                <div className="admin-page-right">
                    <h2>Posts</h2>
                    <div>
                        <table>
                            <tr>
                                <th>Modify</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Published</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faGear} /></td>
                                <td>187</td>
                                <td>Uzbekistans 2025 budget prioritizes education, infrastructure, and social spending</td>
                                <td>box</td>
                                <td>In Review...</td>
                                <td>01.02.2024 17:05</td>
                                <td>02.02.2024 12:02</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faGear} /></td>
                                <td>187</td>
                                <td>Uzbekistans 2025 budget prioritizes education, infrastructure, and social spending</td>
                                <td>box</td>
                                <td>In Review...</td>
                                <td>01.02.2024 17:05</td>
                                <td>02.02.2024 12:02</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreatePost