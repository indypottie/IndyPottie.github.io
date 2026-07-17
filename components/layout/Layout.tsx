import { Outlet } from "react-router-dom";

import useScrollToHash from "../../hooks/useScrollToHash";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Background from "../background/Background";

export default function Layout() {

    useScrollToHash();
    
    return (

        <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">

            <Background />

            <div className="relative z-10 flex min-h-screen flex-col">

                <Navbar />

                <Outlet />

                <Footer />

            </div>

        </div>

    );

}