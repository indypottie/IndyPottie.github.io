import type { Project } from "../../types/Project";

import { FiPlay } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import LinkButton from "../ui/LinkButton/LinkButton";

interface Props{

    project: Project;

}

export default function ProjectActions({

    project,

}:Props){

    return(

        <div className="mt-8 flex gap-3">

            {project.github &&
                <LinkButton
                    href={project.github}
                    external
                    variant="outlined"
                    icon={<FaGithub />}
                >
                    Source
                </LinkButton>
            }

            {project.release &&

                <LinkButton
                    href={project.release}
                    external
                    variant="filled"
                    icon={<FiPlay />}
                >
                    Release
                </LinkButton>
            }

        </div>

    );

}