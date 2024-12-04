import { useLoaderData } from "react-router-dom";

import axios from "../utils/axios";
import MainPost from "../components/MainPost";
import LatestNews from "../components/LatestNews";
import BreakingNews from "../components/BreakingNews";
import NewsList from "../components/NewsList";


const ALL_POSTS_URL = '/news/all/'

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
                <div>
                    <MainPost mainPost={mainPost} />
                    <div>
                        <BreakingNews />
                        <NewsList />
                    </div>
                </div>
                <LatestNews latestNews={posts} />
            </div>
        </div>
    )
}

export default Home