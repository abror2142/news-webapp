import { Outlet, useLoaderData } from "react-router-dom";

import Footer from "../Components/Footer";
import Header from "../components/Header";


import { getLayoutData } from "../utils/dataAPI";


export async function loader(){
    const resp = await getLayoutData();
    const json = await resp.json()
   return json
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