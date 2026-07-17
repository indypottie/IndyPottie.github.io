import Section from "../../../components/ui/Section";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";

import ProjectCard from "../../../components/project/ProjectCard";

import { projects } from "../../../data/Projects";

export default function Projects() {

    return(

        <Section id="projects">

            <SectionHeader

                label="PROJECTS"

                title="Portfolio Assets"

                description="A collection of personal and professional projects focused on game AI, gameplay systems and modern C++."

            />

            <div className="grid gap-8 lg:grid-cols-2">

            {projects
                .filter(project => project.featured)
                .map(project => (

                    <ProjectCard

                        key={project.id}

                        project={project}

                    />

            ))}

            </div>

        </Section>

    );

}