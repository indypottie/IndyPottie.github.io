import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";

import { about } from "../../../../data/About";

export default function AboutIdentity() {

    return (

        <section className="pb-24">

            <Container>

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {about.identity.map(item => (

                    <EditorPanel
                        key={item.title}
                        title={item.title}
                    >
                        <div
                            className="
                                flex
                                w-full
                                min-h-[180px]
                                flex-col
                                justify-between
                                items-start
                                text-left
                            "
                        >
                            <div>

                                <h3 className="text-4xl font-black leading-none">

                                    {item.value}

                                </h3>

                                <p className="mt-5 leading-7 text-zinc-400">

                                    {item.subtitle}

                                </p>

                            </div>

                        </div>

                    </EditorPanel>

                    ))}

                </div>

            </Container>

        </section>

    );

}