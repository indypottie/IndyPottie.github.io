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
                relative
                mt-8
                overflow-hidden
                rounded-lg
                border
                border-zinc-800
                bg-zinc-900

                ${large ? "aspect-video" : "aspect-[16/10]"}
            `}
        >

            {project.thumbnail
                ? <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                    "
                />
                : "Preview"}

        </div>

    );

}