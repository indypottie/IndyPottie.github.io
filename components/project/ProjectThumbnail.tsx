import type { Project } from "../../types/Project";

interface Props {

    project: Project;

    large?: boolean;

}
export default function ProjectThumbnail({

    project,
    
    large = false,

}: Props){

    return(

        <div
            className={`
                mt-8
                rounded-lg
                border
                border-zinc-800
                bg-zinc-900

                ${
                    large
                        ? "aspect-video"
                        : "aspect-[16/10]"
                }
            `}
        >

            {project.thumbnail
                ? <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full rounded-lg object-cover"
                />
                : "Preview"}

        </div>

    );

}