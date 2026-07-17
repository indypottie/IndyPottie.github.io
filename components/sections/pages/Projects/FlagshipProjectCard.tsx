import type { Project } from "../../../../types/Project";

import EditorPanel from "../../../ui/EditorPanel/EditorPanel";

import ProjectHeader from "../../../project/ProjectHeader";
import ProjectThumbnail from "../../../project/ProjectThumbnail";
import ProjectMetadata from "../../../project/ProjectMetadata";
import ProjectTags from "../../../project/ProjectTags";
import ProjectActions from "../../../project/ProjectActions";

interface Props {

    project: Project;

}

export default function FlagshipProjectCard({

    project,

}: Props) {

    return (

        <EditorPanel title="Flagship Asset">

            <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr] p-8">

                {/* LEFT */}

                <div>

                    <div className="mb-8 flex flex-wrap gap-3">

                        <div className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-blue-400">

                            Flagship

                        </div>

                        <div className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-400">

                            UE5

                        </div>

                        <div className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-400">

                            C++

                        </div>

                    </div>

                    <ProjectHeader project={project} />

                    <div className="mt-8">

                        <ProjectThumbnail

                            project={project}

                            large

                        />

                    </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-col">

                    <div>

                        <h3 className="text-sm uppercase tracking-[0.3em] text-blue-400">

                            Overview

                        </h3>

                        <p className="mt-5 leading-8 text-zinc-400">

                            {project.description}

                        </p>

                    </div>

                    <div className="mt-10">

                        <ProjectMetadata project={project} />

                    </div>

                    <div className="mt-8">

                        <ProjectTags project={project} />

                    </div>

                    <div className="mt-10">

                        <ProjectActions project={project} />

                    </div>

                </div>

            </div>

        </EditorPanel>

    );

}