import { Link } from "react-router-dom";


function BreakingNews({breakingNewsList}) {
    breakingNewsList = breakingNewsList.slice(0, 3)
    return (
        <div className="breaking-news-box">
            {breakingNewsList.map((news, index) => (
                <Link to={`post/${news.id}/`} className="breaking-news">
                    <p className="breaking-news-title">{news.title}</p>
                    <p className="breaking-news-description">{news.description.slice(0, 150)}...</p>
                </Link>
            )) }
        </div>
    )
}

export default BreakingNews