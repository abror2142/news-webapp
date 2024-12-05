import { Link } from "react-router-dom";
import timeFormatManager from "../utils/timeFormatManager";

function PostCard({post}){
    return (
        <div className="post-card grid-item link-div">
            <div className="post-image">
                <img src={post.image} />
            </div>
            <div className="post-card-info">
                <p className="post-time">{timeFormatManager(post.created_at)}</p>
                <Link to={`/post/${post.id}`} className="post-title link">{post.title}</Link>
            </div>
        </div>
    )
}   

export default PostCard