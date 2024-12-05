import { useLoaderData } from "react-router-dom";

import MainPost from "../components/MainPost";
import LatestNews from "../components/LatestNews";
import BreakingNews from "../components/BreakingNews";
import NewsList from "../components/NewsList";

import { getHomePageData } from "../utils/dataAPI";


export async function loader () {
    const resp = await getHomePageData()
    const json = await resp.json()
    return json
}

function Home() {
    const posts = useLoaderData()
    const mainPost = posts[0]

    return (
        <div className="home-page">
            <div className="main-content"> 
                <div className="main-content-box">
                    <MainPost mainPost={mainPost} />
                    <div className="important-news">
                        <BreakingNews breakingNewsList={posts} />
                        <NewsList newsList={posts}/>
                    </div>
                </div>
                <LatestNews latestNews={posts} />
            </div>
        </div>
    )
}

export default Home