import type { ReactNode } from "react";

interface PropertyRowProps {

    label: string;

    value: ReactNode;

}

export default function PropertyRow({

    label,

    value,

}: PropertyRowProps) {

    return (

        <div

            className="
                group

                flex

                items-center

                justify-between

                border-b

                border-zinc-800

                py-4

                transition-colors

                duration-200

                hover:border-blue-500/20
            "

        >

            <span

                className="
                    text-zinc-500

                    transition-colors

                    duration-200

                    group-hover:text-zinc-300
                "

            >

                {label}

            </span>

            <span

                className="
                    font-medium

                    text-white

                    transition-all

                    duration-200

                    group-hover:translate-x-1
                "

            >

                {value}

            </span>

        </div>

    );

}