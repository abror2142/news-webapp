import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Layout, {loader as layoutLoader} from "./hocs/Layout";
import Home from "./containers/Home";


const routes = createRoutesFromElements(
    <Route 
        path="/" 
        element={<Layout />} 
        loader={layoutLoader}
    >
        <Route index element={<Home />} />
    </Route>
)

export const router = createBrowserRouter(routes)