import type { ReactNode } from "react";

import EditorPanelHeader from "./EditorPanelHeader";
import EditorPanelBody from "./EditorPanelBody";

interface EditorPanelProps {

    title: string;

    children: ReactNode;

}

export default function EditorPanel({

    title,

    children,

}: EditorPanelProps) {

    return (

        <div

            className="
                group

                overflow-hidden

                rounded-xl

                border
                border-zinc-800

                bg-zinc-900/60

                shadow-2xl

                backdrop-blur-md

                transition-all
                duration-200

                hover:-translate-y-1

                hover:border-blue-500/30

                hover:bg-zinc-900/80

                hover:shadow-[0_0_40px_rgba(59,130,246,.08)]
            "

        >

            <EditorPanelHeader
                title={title}
            />

            <EditorPanelBody>

                {children}

            </EditorPanelBody>

        </div>

    );

}