import type { Project } from "../../types/Project";

interface Props {
    project: Project;
}

export default function ProjectHeader({ project }: Props) {
    return (
        <div className="mb-6">

            <h3 className="text-2xl font-bold">
                {project.title}
            </h3>

            <p className="text-zinc-400">
                {project.subtitle}
            </p>

            <p
                className="
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-zinc-500
                "
            >
                {project.description}
            </p>

        </div>
    );
}