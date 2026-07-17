import { useState } from "react";

import Container from "../../../ui/Container";
import SectionHeader from "../../../ui/SectionHeader/SectionHeader";

import ProjectFiltersBar from "./ProjectFiltersBar";

import ProjectCard from "../../../project/ProjectCard";

import { projects } from "../../../../data/Projects";
import { portfolio } from "../../../../data/Portfolio";

import {

    ProjectFilters,
    type ProjectFilter,

} from "../../../../types/ProjectFilters";

export default function ProjectsGrid() {

    const [filter, setFilter] = useState<ProjectFilter>(
        ProjectFilters.All
    );

    const visibleProjects = projects.filter(project => {

        // Never show the flagship twice
        if (portfolio.flagshipProject === project.id) {

            return false;

        }

        switch (filter) {

            case ProjectFilters.Featured:

                return project.featured;

            case ProjectFilters.Completed:

                return project.status === "Completed";

            case ProjectFilters.InDevelopment:

                return project.status === "In Development";

            default:

                return true;

        }

    });

    return (

        <section className="pb-32">

            <Container>

                <SectionHeader

                    className="mb-10"

                    label="PROJECT LIBRARY"

                    title="All Projects"

                    description="Browse every project in my portfolio, including professional work, university projects, personal experiments and projects currently in development."

                />

                <ProjectFiltersBar

                    current={filter}

                    onChange={setFilter}

                />

                <div

                    className="
                        mt-10
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-3
                    "

                >

                    {visibleProjects.map(project => (

                        <ProjectCard

                            key={project.id}

                            project={project}

                            compact

                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}