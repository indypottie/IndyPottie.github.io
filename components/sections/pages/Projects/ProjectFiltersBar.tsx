import {

    type ProjectFilter,

    ProjectFilterValues,

} from "../../../../types/ProjectFilters";

interface Props {

    current: ProjectFilter;

    onChange: (filter: ProjectFilter) => void;

}

export default function ProjectFilters({

    current,

    onChange,

}: Props) {

    return (

        <div className="mb-8 flex flex-wrap gap-3">

            {ProjectFilterValues.map(filter => (

                <button

                    key={filter}

                    onClick={() => onChange(filter)}

                    className={`
                        rounded-md
                        border
                        px-4
                        py-2
                        text-sm
                        transition-all
                        duration-200
                        ${
                            current === filter
                                ? "border-blue-500 bg-blue-500/10 text-blue-400"
                                : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600"
                        }
                    `}
                >

                    {filter}

                </button>

            ))}

        </div>

    );

}