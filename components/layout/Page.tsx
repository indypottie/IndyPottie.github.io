import type { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
    className?: string;
}

export default function Page({
    children,
    className = "",
}: PageProps) {

    return (
        <main
            className={`
                relative
                z-10
                pt-36
                pb-32
                ${className}
            `}
        >
            {children}
        </main>
    );
}