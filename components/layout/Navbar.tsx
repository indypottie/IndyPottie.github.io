import { useEffect, useState } from "react";

import {

    Link,

    NavLink,
} from "react-router-dom";

import LinkButton from "../ui/LinkButton";

import { navigation } from "../../data/Navigation";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        function handleScroll() {

            setScrolled(window.scrollY > 40);

        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header

            className={`
                fixed
                inset-x-0
                top-0
                z-50
                transition-all
                duration-300
                ${
                    scrolled
                        ? "border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-2xl"
                        : "border-b border-zinc-800/50 bg-zinc-950/40 backdrop-blur-md"
                }
            `}

        >

            <nav className="mx-auto flex h-22 max-w-7xl items-center justify-between px-8">

                <Link

                    to="/#hero"

                    className={`
                        group
                        select-none
                        transition-all
                        duration-300
                        ${
                            location.pathname === "/"
                                ? "text-blue-400"
                                : ""
                        }
                    `}

                >

                    <div
                        className="
                            text-4xl
                            font-black
                            leading-none
                            transition-all
                            duration-300
                            group-hover:text-blue-300
                            group-hover:tracking-wide
                        "
                    >

                        INDY.

                    </div>

                    <div
                        className="
                            mt-1
                            text-xs
                            uppercase
                            tracking-[0.35em]
                            text-zinc-500
                            transition-colors
                            duration-300
                            group-hover:text-zinc-300
                        "
                    >

                        Game AI & Systems Programmer

                        <div

                            className={`
                                mt-2
                                h-0.5
                                rounded-full
                                bg-blue-500
                                transition-all
                                duration-300
                                ${
                                    location.pathname === "/"
                                        ? "w-full opacity-100"
                                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                }
                            `}

                        />

                    </div>

                </Link>

                <div className="flex items-center gap-8">

                    <ul className="flex items-center gap-8">

                        {navigation.map(item => (

                            <li key={item.label}>

                                <NavLink

                                    to={item.href}

                                    className={({ isActive }) =>

                                        `navbar-link ${isActive ? "navbar-link-active" : ""}`

                                    }

                                >

                                    {item.label}

                                </NavLink>

                            </li>

                        ))}

                    </ul>

                    <div
                        className="
                            h-6
                            w-px
                            bg-zinc-800
                        "
                    />

                    <LinkButton

                        href="/#contact"

                        variant="outlined"

                    >

                        Contact

                    </LinkButton>

                </div>

            </nav>

        </header>

    );

}