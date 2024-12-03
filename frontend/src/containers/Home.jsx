import { useLoaderData } from "react-router-dom";

import axios from "../utils/axios";


const ALL_POSTS_URL = '/news/all/'
const BASE_URL = 'http://localhost:8000'

export async function loader () {
    const resp = await axios.get(ALL_POSTS_URL)
    return resp.data
}

function Home() {
    const posts = useLoaderData()
    const mainPost = posts[0]
    return (
        <div className="home-page">
            <div className="main-content"> 

                <div className="main-news">
                    <div className="main-post">
                        <div>
                            <p>{mainPost.created_at}</p>
                            <h2 className="main-post-title">{mainPost.title}</h2>
                            <p>{mainPost.description}</p>
                        </div>
                        <img src={BASE_URL+mainPost.image} className="main-post-image"/>
                    </div>
                </div>

                <div className="latest-news">
                    <h2>So'nggi Yangiliklar</h2>
                    <div className="latest-posts">
                        {posts.map(post => <p className="latest-post-title">{post.title}</p>)}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home