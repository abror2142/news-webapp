import { useEffect, useState } from "react";
import { getTagPage } from "../utils/dataAPI";
import { data, useLoaderData, useParams } from "react-router-dom";
import NewsList from "../components/NewsList";


const getTagFromURL = (url) => {
    const [,searchParams] = url.split('?')
    return new URLSearchParams(searchParams).get('tag') || 'LatestNews'
}

export async function loader ({params, request}) {
    const tag = getTagFromURL(request.url)
    const resp = await getTagPage(tag)
    const json = await resp.json()
    return json
}

function TagPage() {
    const [dataStore, setDataStore] = useState({})
    const [currentTag, setCurrentTag] = useState(getTagFromURL(window.location.href))
    const initialData = useLoaderData()
    
    const tags = ["LatestNews", ...initialData['tags']]

    useEffect(() => {
        let newData = {}
        newData[currentTag] = initialData['posts']
        setDataStore((store) => ({...store, ...newData}))
    }, [])

    async function displayTag(tag) {
        if (dataStore[tag] != null) {
            setCurrentTag(tag)
        } else {
            const resp = await getTagPage(tag);
            const json = await resp.json();
            let newData = {};
            newData[tag] = json['posts']
            setDataStore((store) => ({...store, ...newData}));
            setCurrentTag(tag)
        }
    }

    return (
        <div className="tag-page">
           <div className="tag-button-box">
                {tags && tags.map(tag => {
                    return (
                        <p className={tag == currentTag ? "tag-button active" : "tag-button" }onClick={() => displayTag(tag)}>#{tag}</p>
                    )
                }) }
           </div>
           <div className="tag-page-content">
    
                {dataStore[currentTag] && <NewsList newsList={dataStore[currentTag]} />}
                <div className="tag-page-side">

                </div>
           </div>
        </div>
    )
}

export default TagPage