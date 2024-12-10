import { Link } from "react-router-dom";

import timeFormatManager from "../utils/timeFormatManager" ;

function NewsList({newsList}) {
    return (
        <div className="news-list-box">
            {newsList.map((post, index) => (
                <div>
                <div className="news-list-item link-div">
                    <div className="news-list-info">
                        <p className="news-list-meta">{post.categories[0].category_name} | {timeFormatManager(post.created_at, false, true)}</p>
                        <p className="news-list-title">
                            <Link to={`/post/${post.id}/`} className="link">
                                {post.title}
                            </Link>
                        </p>
                    </div>
                    <div className="news-list-image">
                        <img src={post.image} />
                    </div>
                </div>
                {index != newsList.length-1 && <hr />}
                </div>
            )) }
        </div>
    )
}

export default NewsList