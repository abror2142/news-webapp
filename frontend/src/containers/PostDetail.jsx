import { useLoaderData } from "react-router-dom";
import axios from "../utils/axios"
import LatestNews from "../components/LatestNews";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy, faArrowAltCircleLeft, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTelegram} from "@fortawesome/free-brands-svg-icons";
import { BASE_URL } from "../utils/constants"


export async function loader ({ params }) {
    const postId = params.id
    const URL = BASE_URL + '/news/' + postId + "/"
    const resp = await axios.get(URL)
    return resp.data
}

function PostDetail() {
    const post = useLoaderData()
    return (
        <div className="post-detail-page">
            <div className="post-detail-action">
                <div className="post-detail-action-icon-box">
                    <FontAwesomeIcon className="post-detail-action-icon" icon={faArrowLeft}/>
                    <FontAwesomeIcon className="post-detail-action-icon" icon={faCopy}/>
                    <FontAwesomeIcon className="post-detail-action-icon" icon={faTelegram}/>
                    <FontAwesomeIcon className="post-detail-action-icon" icon={faFacebook}/>
                </div>
            </div>
            <div className="post-detail">
                <p className="post-detail-meta">{post.categories[0].category_name}</p>
                <h2 className="post-detail-title">{post.title}</h2>
                <h3 className="post-detail-description">{post.description}</h3>
                <div dangerouslySetInnerHTML={{__html: post.content}} className="post-detail-content"></div>
            </div>
            <div>
                <LatestNews latestNews={[post, post, post, post, post]}/>
            </div>
        </div>
    )
}

export default PostDetail