import Container from "../../components/ui/Container";

import {

    FaGithub,
    FaLinkedin,
    FaEnvelope,

} from "react-icons/fa";

export default function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer
            className="
                border-t
                border-zinc-800
                bg-zinc-950/70
                backdrop-blur-md
            "
        >

            <Container>

                <div
                    className="
                        flex
                        flex-col
                        gap-8
                        py-8

                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                text-blue-400
                            "
                        >

                            Game AI & Systems Programmer

                        </p>

                        <p className="mt-3 text-sm text-zinc-500">

                            © {year} Indy Pottie

                        </p>

                    </div>

                    <div
                        className="
                            flex
                            items-center
                            gap-6
                            text-zinc-400
                        "
                    >

                        <a

                            href="https://github.com/IndyPottie"

                            target="_blank"

                            rel="noopener noreferrer"

                            className="
                                transition-colors
                                hover:text-blue-400
                            "

                        >

                            <FaGithub size={20} />

                        </a>

                        <a

                            href="https://linkedin.com/in/indypottie"

                            target="_blank"

                            rel="noopener noreferrer"

                            className="
                                transition-colors
                                hover:text-blue-400
                            "

                        >

                            <FaLinkedin size={20} />

                        </a>

                        <a

                            href="mailto:indy.pottie@gmail.com"

                            className="
                                transition-colors
                                hover:text-blue-400
                            "

                        >

                            <FaEnvelope size={20} />

                        </a>

                    </div>

                </div>

            </Container>

        </footer>

    );

}