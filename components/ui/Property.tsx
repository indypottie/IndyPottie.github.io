import type { ReactNode } from "react";

interface PropertyProps {

    label: string;

    value: ReactNode;

}

export default function Property({

    label,

    value,

}: PropertyProps) {

    return (

        <div className="flex justify-between border-b border-zinc-800 py-3">

            <span className="text-zinc-500">

                {label}

            </span>

            <span className="font-medium">

                {value}

            </span>

        </div>

    );

}