import Container from "../../../ui/Container";
import EditorPanel from "../../../ui/EditorPanel/EditorPanel";
import AnimatedCounter from "../../../ui/AnimatedCounter";

import { projects } from "../../../../data/Projects";

export default function ProjectsStatistics() {

    const completed = projects.filter(

        project => project.status === "Completed"

    ).length;

    const inDevelopment = projects.filter(

        project => project.status === "In Development"

    ).length;

    const primaryEngine =
        projects
            .map(project => project.engine)
            .sort(
                (a, b) =>
                    projects.filter(p => p.engine === b).length -
                    projects.filter(p => p.engine === a).length
            )[0];

    return (

        <section className="pb-28">

            <Container>

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <EditorPanel title="PROJECTS">

                        <div className="p-8">

                            <div className="text-5xl font-black">

                                <AnimatedCounter value={projects.length} />

                            </div>

                            <p className="mt-2 text-zinc-400">

                                Total Projects

                            </p>

                        </div>

                    </EditorPanel>

                    <EditorPanel title="COMPLETED">

                        <div className="p-8">

                            <div className="text-5xl font-black">

                                <AnimatedCounter value={completed} />

                            </div>

                            <p className="mt-2 text-zinc-400">

                                Finished Projects

                            </p>

                        </div>

                    </EditorPanel>

                    <EditorPanel title="ACTIVE">

                        <div className="p-8">

                            <div className="text-5xl font-black">

                                <AnimatedCounter value={inDevelopment} />

                            </div>

                            <p className="mt-2 text-zinc-400">

                                Currently Building

                            </p>

                        </div>

                    </EditorPanel>

                    <EditorPanel title="PRIMARY">

                        <div className="p-8">

                            <div className="text-5xl font-black">

                                {primaryEngine}

                            </div>

                            <p className="mt-2 text-zinc-400">

                                Most Used Engine

                            </p>

                        </div>

                    </EditorPanel>

                </div>

            </Container>

        </section>

    );

}