import type { Project } from "../../types/Project";

import PropertyRow from "../ui/PropertyRow/PropertyRow";

interface Props{

    project: Project;

}

export default function ProjectMetadata({

    project,

}:Props){

    return(

        <>

            <PropertyRow

                label="Engine"

                value={project.engine}

            />

            <PropertyRow

                label="Language"

                value={project.language}

            />

            <PropertyRow

                label="Status"

                value={project.status}

            />

        </>

    );

}