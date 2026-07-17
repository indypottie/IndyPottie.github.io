import type { ReactNode } from "react";

interface SectionLabelProps {
    children: ReactNode;
}

export default function SectionLabel({
    children,
}: SectionLabelProps) {
    return (
        <p
            className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.35em]
            text-blue-400
            "
        >
            {children}
        </p>
    );
}