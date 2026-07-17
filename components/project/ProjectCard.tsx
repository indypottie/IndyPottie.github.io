import type { Project } from "../../types/Project";

import EditorPanel from "../ui/EditorPanel/EditorPanel";

import ProjectHeader from "./ProjectHeader";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectMetadata from "./ProjectMetadata";
import ProjectTags from "./ProjectTags";
import ProjectActions from "./ProjectActions";

interface ProjectCardProps {

    project: Project;

    compact?: boolean;

}

export default function ProjectCard({

    project,

    compact = false,

}: ProjectCardProps) {

    return (

        <EditorPanel title="Asset">

            <div
                className={
                    compact
                        ? "space-y-4"
                        : "space-y-6"
                }
            >

                <ProjectHeader project={project} />

                <ProjectThumbnail

                    project={project}

                />

                <ProjectMetadata

                    project={project}

                />

                <ProjectTags

                    project={project}

                />

                <ProjectActions

                    project={project}

                />

            </div>

        </EditorPanel>

    );

}