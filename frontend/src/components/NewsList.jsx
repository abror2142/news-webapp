import { BASE_URL } from "../utils/constants"
import timeFormatManager from "../utils/timeFormatManager" ;


function NewsList({newsList}) {
    return (
        <div className="news-list-box">
            {newsList.map((news, index) => (
                <div className="news-list-item">
                    <div>
                        <p className="news-list-meta">{news.categories[0].category_name} | {timeFormatManager(news.created_at, false, true)}</p>
                        <p className="news-list-title">{news.title}</p>
                    </div>
                    <div className="news-list-image">
                        <img src={BASE_URL + news.image} />
                    </div>
                </div>
            )) }
        </div>
    )
}

export default NewsList