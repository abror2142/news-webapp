import { BASE_URL } from "../utils/constants"

function NewsList({newsList}) {
    return (
        <div>
            {newsList.map((news, index) => (
                <div>
                    <p>{news.title}</p>
                    <img src={BASE_URL + news.image} />
                </div>
            )) }
        </div>
    )
}

export default NewsList