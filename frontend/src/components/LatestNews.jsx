function LatestNews({latestNews}) {
    return (
        <div className="latest-news">
            <h2>So'nggi Yangiliklar</h2>
            <div className="latest-posts">
                {latestNews.map(post => <p className="latest-post-title">{post.title}</p>)}
            </div>
        </div>
    )
}

export default LatestNews