import Container from "../../../ui/Container";
import SectionHeader from "../../../ui/SectionHeader/SectionHeader";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";

import { about } from "../../../../data/About";

export default function CoreValues() {

    return (

        <section className="pb-32">

            <Container>

                <SectionHeader

                    label="VALUES"

                    title="How I Build Software"

                    description="The principles that guide every project I work on."

                />

                <div
                    className="
                        grid
                        gap-8
                        lg:grid-cols-3
                    "
                >

                    {about.values.map(value => (

                        <EditorPanel

                            key={value.title}

                            title="CORE"

                        >

                            <div className="p-8">

                                <h3 className="text-2xl font-bold">

                                    {value.title}

                                </h3>

                                <p className="mt-4 leading-7 text-zinc-400">

                                    {value.description}

                                </p>

                            </div>

                        </EditorPanel>

                    ))}

                </div>

            </Container>

        </section>

    );

}