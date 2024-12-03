import { Outlet, useLoaderData } from "react-router-dom";

import Footer from "../Components/Footer";
import Header from "../components/Header";
import axios from "../utils/axios";

const CATEGORIES_URL = '/news/category/'

export async function loader(){
    const resp = await axios.get(CATEGORIES_URL)
   return resp.data
}

function Layout(){
    const data = useLoaderData()

    return (
        <div className="site-wrapper">
            <header className="header">
                <Header categories={data} />
            </header>

            <main className="main">
                <Outlet />
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout