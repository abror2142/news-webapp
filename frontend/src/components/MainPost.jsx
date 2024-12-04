import { BASE_URL } from "../utils/constants"
import timeFormatManager from "../utils/timeFormatManager";


function MainPost({mainPost}) {
    const date = new Date(mainPost.created_at)
    console.log(mainPost)
    return (
        <div className="main-news">
            <div className="main-post">
                <div className="main-post-content">
                    <p className="main-post-meta">{mainPost.categories[0].category_name} {timeFormatManager(mainPost.created_at)}</p>
                    <h2 className="main-post-title">{mainPost.title}</h2>
                    <p>{mainPost.description}</p>
                </div>
                <img src={BASE_URL + mainPost.image} className="main-post-image"/>
            </div>
        </div>
    )
}

export default MainPost