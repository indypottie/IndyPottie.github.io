import Container from "../../../ui/Container";

import FlagshipProjectCard from "./FlagshipProjectCard";

import { projects } from "../../../../data/Projects";
import { portfolio } from "../../../../data/Portfolio";

export default function FlagshipProject() {

    const flagship = projects.find(

        project =>

            project.id === portfolio.flagshipProject

    );

    if (!flagship) {

        return null;

    }

    return (

        <section className="pb-24">

            <Container>

                <div className="mb-6">

                    <p className="text-sm uppercase tracking-[0.35em] text-blue-400">

                        FLAGSHIP PROJECT

                    </p>

                </div>

                <FlagshipProjectCard

                    project={flagship}

                />

            </Container>

        </section>

    );

}