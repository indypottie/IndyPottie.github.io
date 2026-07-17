import SectionLabel from "../SectionLabel/SectionLabel";

interface Props {

    label: string;

    title: string;

    description?: string;

    className?: string;
}

export default function SectionHeader({

    label,

    title,

    description,

    className = "",
}: Props) {

    return (

        <header

            className={`
                mb-16
                transition-all
                duration-300
                ${className}
            `}

        >

            <div

                className="
                    transition-all

                    duration-300

                    hover:translate-x-1
                "

            >

                <SectionLabel>

                    {label}

                </SectionLabel>

            </div>

            <h2

                className="
                    mt-4

                    text-5xl

                    font-black

                    tracking-tight

                    transition-colors

                    duration-300
                "

            >

                {title}

            </h2>

            {description && (

                <p

                    className="
                        mt-5

                        max-w-3xl

                        text-lg

                        leading-8

                        text-zinc-400

                        transition-colors

                        duration-300
                    "

                >

                    {description}

                </p>

            )}

            <div

                className="
                    mt-8

                    h-px

                    w-full

                    bg-gradient-to-r

                    from-blue-500/60

                    via-zinc-700

                    to-transparent

                    transition-all

                    duration-300
                "

            />

        </header>

    );

}