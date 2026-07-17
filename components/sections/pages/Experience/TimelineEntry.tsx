import Badge from "../../../ui/Badge";

import type { Experience } from "../../../../types/Experience";

interface Props {

    entry: Experience;

}

export default function TimelineEntry({

    entry,

}: Props) {

    return (

        <div className="relative pl-14 pb-20">

            {/* Timeline line */}

            <div
                className="
                    absolute
                    left-4
                    top-2
                    h-full
                    w-px
                    bg-zinc-800
                "
            />

            {/* Timeline node */}
            <div
                className="
                    absolute
                    left-[10px]
                    top-2
                    h-3
                    w-3
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-500
                    p-[2px]
                "
            >
                <div className="h-full w-full rounded-full bg-zinc-950" />
            </div>

            <div>

                <div className="text-sm text-zinc-500">

                    {entry.duration}

                </div>

                <h3 className="mt-2 text-3xl font-bold">

                    {entry.company}

                </h3>

                <div className="mt-1 text-zinc-300">

                    {entry.role}

                </div>

                {entry.project && (

                    <div className="mt-2 text-zinc-500">

                        {entry.project}

                    </div>

                )}

                <div className="mt-1 text-sm text-zinc-500">

                    {entry.location}

                </div>

                <p className="mt-6 max-w-3xl leading-8 text-zinc-400">

                    {entry.description}

                </p>

                {/* Engines */}

                <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-400">

                        Engines

                    </p>

                    <div className="flex flex-wrap gap-2">

                        {entry.engines.map(engine => (

                            <Badge key={engine}>

                                {engine}

                            </Badge>

                        ))}

                    </div>

                </div>

                {/* Languages */}

                <div className="mt-6">

                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-400">

                        Languages

                    </p>

                    <div className="flex flex-wrap gap-2">

                        {entry.languages.map(language => (

                            <Badge key={language}>

                                {language}

                            </Badge>

                        ))}

                    </div>

                </div>

                {/* Technologies */}

                <div className="mt-6">

                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blue-400">

                        Technologies

                    </p>

                    <div className="flex flex-wrap gap-2">

                        {entry.technologies.map(technology => (

                            <Badge key={technology}>

                                {technology}

                            </Badge>

                        ))}

                    </div>

                </div>

                {entry.highlights && entry.highlights.length > 0 && (

                    <div className="mt-8">

                        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-blue-400">

                            Highlights

                        </p>

                        <ul className="space-y-3">

                            {entry.highlights.map(highlight => (

                                <li
                                    key={highlight}
                                    className="flex items-center gap-3 text-zinc-300"
                                >

                                    <span className="h-2 w-2 rounded-full bg-blue-500" />

                                    {highlight}

                                </li>

                            ))}

                        </ul>

                    </div>

                )}

            </div>

        </div>

    );

}