import type { Project } from "../../types/Project";

import Badge from "../ui/Badge";

interface Props{

    project: Project;

}

export default function ProjectTags({

    project,

}:Props){

    return(

        <div className="mt-6 flex flex-wrap gap-2">

            {project.tags.map(tag=>(

                <Badge key={tag}>

                    {tag}

                </Badge>

            ))}

        </div>

    );

}