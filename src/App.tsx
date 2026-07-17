import {

    BrowserRouter,

    Routes,

    Route,

} from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Skills from "../pages/Skills";

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    element={<Layout />}
                >

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/projects"
                        element={<Projects />}
                    />

                    <Route
                        path="/experience"
                        element={<Experience />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/skills"
                        element={<Skills />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}