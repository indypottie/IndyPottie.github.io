import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";
import EditorPanel from "../../ui/EditorPanel/EditorPanel";
import PropertyRow from "../../ui/PropertyRow/PropertyRow";
import LinkButton from "../../ui/LinkButton";
import { experiences } from "../../../data/Experience";
import { DividerGradient } from "../../ui/Divider";

export default function Experience() {

    return (

        <Section id="experience">
            <SectionHeader

                label="EXPERIENCE"

                title="Professional Experience"

                description="Game development experience I have gained."

            />

            <div className="mt-16">

                <EditorPanel title="WORKSPACE">

                    {experiences.map(experience => (

                        <div
                            key={experience.id}
                            className="space-y-10 p-8"
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <h3 className="text-3xl font-bold">
                                        {experience.company}
                                    </h3>

                                    <p className="mt-2 text-zinc-400">
                                        {experience.role}
                                    </p>

                                </div>

                                <div className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">

                                    {experience.status}

                                </div>

                            </div>

                            <div>

                                <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">

                                    General

                                </h4>

                                <PropertyRow
                                    label="Project"
                                    value={experience.project}
                                />

                                <PropertyRow
                                    label="Duration"
                                    value={experience.duration}
                                />

                                <PropertyRow
                                    label="Engine"
                                    value={experience.engines.join(", ")}
                                />

                            </div>

                            <div>

                                <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">

                                    Technologies

                                </h4>

                                <div className="flex flex-wrap gap-3">

                                    {experience.technologies.map(technology => (

                                        <div
                                            key={technology}
                                            className="rounded-md border border-zinc-800 bg-zinc-900/40 px-4 py-2"
                                        >

                                            {technology}

                                        </div>

                                    ))}

                                </div>

                            </div>

                            <div>

                                {experience.highlights && (
                                    <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">

                                    Systems Implemented

                                    </h4>
                                )}

                                <div className="grid gap-3 md:grid-cols-2">

                                    {experience.highlights?.map(highlight => (

                                        <div
                                            key={highlight}
                                            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4"
                                        >

                                            {highlight}

                                        </div>

                                    ))}

                                </div>

                            </div>

                            <div className="flex justify-end">

                                <LinkButton href="/experience">

                                    View Full Experience

                                </LinkButton>

                            </div>

                            <DividerGradient />

                        </div>

                    ))}

                </EditorPanel>

            </div>

        </Section>

    );

}