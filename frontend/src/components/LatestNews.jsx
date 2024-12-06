import timeFormatManager from "../utils/timeFormatManager"
import { Link } from "react-router-dom";


function LatestNews({latestNews}) {
    return (
        <div className="latest-news">
            <h2>
                <Link to={"/tag?tag=LatestNews"}>So'nggi Yangiliklar</Link>
            </h2>
            <div className="latest-post-box">
                {latestNews.map(post => (
                    <div className="latest-post link-div">
                        <p className="latest-post-title">
                            <Link to={`/post/${post.id}/`} className="link">{post.title}</Link>
                        </p>
                        <p className="latest-post-meta">
                            {post.categories[0].category_name} | {timeFormatManager(post.created_at, true, false)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestNews