import Container from "../../../ui/Container";
import SectionHeader from "../../../ui/SectionHeader/SectionHeader";

import TimelineEntry from "./TimelineEntry";

import { experiences } from "../../../../data/Experience";

export default function ExperienceTimeline() {
    
    const orderedExperiences = [...experiences].sort((a, b) =>
        b.startYear - a.startYear
    );

    return (

        <section className="pb-32">

            <Container>

                <SectionHeader

                    label="TIMELINE"

                    title="Career Timeline"

                    description="Every important milestone from education through professional game development."

                />

                <div className="mt-12">

                    {orderedExperiences.map(entry => (

                        <TimelineEntry

                            key={entry.id}

                            entry={entry}

                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}