import { useEffect, useState } from "react";

import {
    Link,
    NavLink,
    useLocation,
} from "react-router-dom";

import LinkButton from "../ui/LinkButton";

import { navigation } from "../../data/Navigation";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
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

            <nav className="relative mx-auto flex h-22 max-w-7xl items-center justify-between px-6 lg:px-8">

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
                
                {/* navbar for desktop */}
                <div className="hidden items-center gap-8 lg:flex">

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

                        to="/#contact"

                        variant="outlined"

                    >

                        Contact

                    </LinkButton>

                </div>

                {/* navbar button mobile */}
                <button 
                        type="button"
                        onClick={() => setMenuOpen(prev => !prev)}
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded
                        border
                        border-zinc-800
                        bg-zinc-950/60
                        text-zinc-300
                        transition-colors
                        hover:border-zinc-700
                        hover:text-blue-400
                        lg:hidden
                    "
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "x" : "☰"}
                </button>
                
                {/* navbar for mobile */}
                {menuOpen && (
                    <div
                        className="
                            absolute
                            inset-x-0
                            top-full
                            border-b
                            border-zinc-800
                            bg-zinc-950/95
                            backdrop-blur-xl
                            lg:hidden
                        "
                    >
                        <div className="mx-auto max-w-7xl px-6 py-6">
                            <ul className="space-y-2">
                                {navigation.map(item => (
                                    <li key={item.label}>
                                        <NavLink
                                            to={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={({ isActive }) => `
                                                block
                                                border-l-2
                                                px-4
                                                py-3
                                                text-sm
                                                font-medium
                                                uppercase
                                                tracking-wider
                                                transition-colors
                                                ${
                                                    isActive
                                                        ? "border-blue-500 text-blue-400"
                                                        : "border-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            <div className="my-5 h-px bg-zinc-800" />
                            <LinkButton
                                to="/#contact"
                                variant="outlined"
                                className="w-full justify-center"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </LinkButton>
                        </div>
                    </div>
                )}

            </nav>

        </header>

    );

}