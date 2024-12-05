import { useLoaderData } from "react-router-dom";

import axios from "../utils/axios";
import LatestNews from "../components/LatestNews";
import MainPost from "../components/MainPost";
import PostCard from "../components/PostCard";
import timeFormatManager from "../utils/timeFormatManager";

export async function loader({params}) {
    const categoryId = params.id;
    const url = `http://localhost:8000/news/category/${categoryId}/`;
    const resp = await axios.get(url);
    return resp.data
}

function postGroups(posts) {
    let postArray = [] 
    for (let i = 0; i < posts.length; i+=3) {
        postArray.push(posts.slice(i, i+3))
    }
    return postArray
}


function CategoryPage(){
    const posts = useLoaderData()
    const mainPost = posts[0]
    const postGroupList = postGroups(posts)

    return (
        <div className="category-page">
            <div className="category-page-content">
                {/* MAIN POST */}
                <MainPost mainPost={mainPost}/>

                {/* CATEGORY POST CARDS */}
                <div className="category-page-post-cards grid-container">
                    {postGroupList.map((group, index) => {
                        console.log("GROUP:", group)
                        return (
                           
                                group.map((postE, index) => <PostCard post={postE}/>)
                           
                        )
                    })}
                </div>
            </div>
            <div>
                <LatestNews latestNews={posts} />
            </div>
        </div>
    )
}

export default CategoryPage