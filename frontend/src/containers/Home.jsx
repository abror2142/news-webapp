import { useLoaderData } from "react-router-dom";

import MainPost from "../components/MainPost";
import LatestNews from "../components/LatestNews";
import BreakingNews from "../components/BreakingNews";
import NewsList from "../components/NewsList";
import SingleViewPost from "../components/SingleViewPost";

import { getHomePageData } from "../utils/dataAPI";


export async function loader () {
    const resp = await getHomePageData()
    const json = await resp.json()
    return json
}

function Home() {
    const data = useLoaderData()
    
    const mainPost = data.main_post;
    const latestPosts = data.latest_posts;
    const importantPosts = data.important_subject_posts
    const breakingNews = data.breaking_news_posts
    const editorsChoice = data.editors_choice_posts
    const perspectivePosts = data.persepective_posts
    const singleViewPosts = data.single_view_posts

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
                <SingleViewPost post={singleViewPosts[0]} />
                <SingleViewPost post={singleViewPosts[1]} />
        </div>
    )
}

export default Home