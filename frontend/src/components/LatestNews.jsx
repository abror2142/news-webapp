import timeFormatManager from "../utils/timeFormatManager"

function LatestNews({latestNews}) {
    return (
        <div className="latest-news">
            <h2>So'nggi Yangiliklar</h2>
            <div className="latest-post-box">
                {latestNews.map(post => (
                    <div className="latest-post">
                        <p className="latest-post-title">{post.title}</p>
                        <p className="latest-post-meta">{post.categories[0].category_name} | {timeFormatManager(post.created_at, true, false)}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LatestNews