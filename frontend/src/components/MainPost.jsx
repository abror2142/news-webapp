import timeFormatManager from "../utils/timeFormatManager";

import { Link } from "react-router-dom";


function MainPost({mainPost}) {
    const date = new Date(mainPost.created_at)
    console.log(mainPost)
    return (
        <div className="main-news">
            <Link to={`post/${mainPost.id}/`} className="main-post link-div">
                <div className="main-post-content">
                    <p className="main-post-meta">{mainPost.categories[0].category_name} {timeFormatManager(mainPost.created_at)}</p>
                    <h2 className="main-post-title link">{mainPost.title}</h2>
                    <p>{mainPost.description}</p>
                </div>
                <img src={mainPost.image} className="main-post-image"/>
            </Link>
        </div>
    )
}

export default MainPost