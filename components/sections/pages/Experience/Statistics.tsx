import Container from "../../../ui/Container";

import EditorPanel from "../../../ui/EditorPanel/EditorPanel";

import AnimatedCounter from "../../../ui/AnimatedCounter";

import { experienceStatistics } from "../../../../data/ExperienceStatistics";

export default function ExperienceStatistics() {

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

                    {experienceStatistics.map(statistic => (

                        <EditorPanel

                            key={statistic.title}

                            title={statistic.title}

                        >

                            <div className="p-8">

                                {typeof statistic.value === "number" ? (

                                    <AnimatedCounter

                                        value={statistic.value}

                                        suffix={statistic.suffix}

                                    />

                                ) : (

                                    <div className="text-5xl font-black">

                                        {statistic.value}

                                    </div>

                                )}

                                <p className="mt-2 text-zinc-400">

                                    {statistic.description}

                                </p>

                            </div>

                        </EditorPanel>

                    ))}

                </div>

            </Container>

        </section>

    );

}