import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Layout, {loader as layoutLoader} from "./hocs/Layout";
import Home, {loader as homeLoader} from "./containers/Home";
import PostDetail, {loader as postDetailLoader} from "./containers/PostDetail";


const routes = createRoutesFromElements(
    <Route 
        path="/" 
        element={<Layout />} 
        loader={layoutLoader}
    >
        <Route index element={<Home />} loader={homeLoader} />
        <Route path="post/:id/" element={<PostDetail />} loader={postDetailLoader}/>
    </Route>
)

export const router = createBrowserRouter(routes)