import type { ReactNode } from "react";

interface EditorPanelBodyProps {
    children: ReactNode;
}

export default function EditorPanelBody({
    children,
}: EditorPanelBodyProps) {
    return (
        <div className="p-6">
            {children}
        </div>
    );
}