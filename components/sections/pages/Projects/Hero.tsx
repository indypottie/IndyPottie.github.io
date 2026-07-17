import Container from "../../../ui/Container";
import SectionLabel from "../../../ui/SectionLabel/SectionLabel";

export default function ProjectsHero() {

    return (

        <section className="pt-44 pb-24">

            <Container>

                <SectionLabel>

                    PROJECTS

                </SectionLabel>

                <h1
                    className="
                        mt-4
                        text-6xl
                        font-black
                        tracking-tight
                    "
                >

                    Portfolio Projects

                </h1>

                <p
                    className="
                        mt-6
                        max-w-3xl
                        text-xl
                        leading-relaxed
                        text-zinc-400
                    "
                >

                    A collection of professional work, personal projects and
                    technical experiments focused on gameplay systems,
                    game AI and modern C++.

                </p>

            </Container>

        </section>

    );

}