import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";
import Portrait from "../../../../src/assets/Portrait/Portrait.png";

import { about } from "../../../../data/About";

export default function AboutMe() {

    return (

        <section className="pb-32">

            <Container>

                <EditorPanel title="ABOUT ME">

                    <div
                        className="
                            grid
                            gap-16
                            p-10
                            lg:grid-cols-2
                        "
                    >

                        <div>

                            <h2 className="text-4xl font-bold">

                                {about.intro.title}

                            </h2>

                            <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">

                                {about.paragraphs.map(paragraph => (

                                    <p key={paragraph}>

                                        {paragraph}

                                    </p>

                                ))}

                            </div>

                        </div>

                        <div
                            className="
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <img
                                src={Portrait}
                                alt="Portrait of Indy Pottie"
                                className="
                                    w-full
                                    max-w-md
                                    rounded-xl
                                    border
                                    border-zinc-800
                                    object-cover
                                    shadow-lg
                                "
                            />

                        </div>

                    </div>

                </EditorPanel>

            </Container>

        </section>

    );

}