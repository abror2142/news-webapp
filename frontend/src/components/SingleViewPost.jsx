import { Link } from "react-router-dom"
import timeFormatManager from "../utils/timeFormatManager"


function SingleViewPost( {post} ){
    return (
        <div className="single-view-post link-div">
            <div className="single-view-post-info">
                <p>{post.categories[0].category_name}</p>
                <div>
                    <p className="single-view-post-title link">
                        <Link to={`/post/${post.id}/` }>
                            {post.title}
                        </Link>
                    </p>
                    <p>{post.description}</p>
                </div>
                <p>{timeFormatManager(post.created_at, null, true)}</p>
            </div>
            <img className="single-view-post-image" src={post.image} />
        </div>
    )
}

export default SingleViewPost