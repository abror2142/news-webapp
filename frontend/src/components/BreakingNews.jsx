import { BASE_URL } from "../utils/constants"

function BreakingNews({breakingNewsList}) {
    breakingNewsList = breakingNewsList.slice(0, 4)
    return (
        <div className="breaking-news-box">
            {breakingNewsList.map((news, index) => (
                <div className="breaking-news">
                    <p className="breaking-news-title">{news.title}</p>
                    <p className="breaking-news-description">{news.description.slice(0, 100)}...</p>
                </div>
            )) }
        </div>
    )
}

export default BreakingNews