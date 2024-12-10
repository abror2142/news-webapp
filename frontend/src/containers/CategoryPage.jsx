import { useLoaderData } from "react-router-dom";

import LatestNews from "../components/LatestNews";
import MainPost from "../components/MainPost";
import PostCard from "../components/PostCard";

import { getCategoryPage } from "../utils/dataAPI";


export async function loader({params}) {
    const categoryId = params.id;
    const resp = await getCategoryPage(categoryId)
    const json = await resp.json()
    return json
}

function postGroups(posts) {
    let postArray = [] 
    for (let i = 0; i < posts.length; i+=3) {
        postArray.push(posts.slice(i, i+3))
    }
    return postArray
}


function CategoryPage(){
    const data = useLoaderData()
    let categoryPosts = data['category_posts']
    const latestPosts = data['latest_posts']
    const mainCategoryPost = categoryPosts[0]
    categoryPosts = categoryPosts.slice(1)

    return (
        <div className="category-page">
            <div className="category-page-content">
                {/* MAIN POST */}
                <MainPost mainPost={mainCategoryPost}/>

                {/* CATEGORY POST CARDS */}
                <div className="category-page-post-cards grid-container">
                    {categoryPosts && categoryPosts.map((post, index) => {
                        return (<PostCard key={"category-post-card" + index} post={post}/>)
                    })}
                </div>
            </div>
            <div>
                <LatestNews latestNews={latestPosts} />
            </div>
        </div>
    )
}

export default CategoryPage