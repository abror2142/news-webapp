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
    
    const mainPost = posts.main_post;
    const latestPosts = posts.latest_posts;
    const importantPosts = posts.important_subject_posts
    const breakingNews = posts.breaking_news_posts

    return (
        <div className="home-page">
            <div className="main-content"> 
                <div className="main-content-box">
                    <MainPost mainPost={mainPost} />
                    <div className="important-news">
                        <BreakingNews breakingNewsList={breakingNews} />
                        <NewsList newsList={importantPosts}/>
                    </div>
                </div>
                <LatestNews latestNews={latestPosts} />
            </div>
        </div>
    )
}

export default Home