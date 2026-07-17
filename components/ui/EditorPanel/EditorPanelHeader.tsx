interface EditorPanelHeaderProps {
    title: string;
}

export default function EditorPanelHeader({
    title,
}: EditorPanelHeaderProps) {
    return (
        <div
            className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-800
            bg-zinc-900/80
            px-5
            py-3
            "
        >
            <span
                className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-zinc-400
                "
            >
                {title}
            </span>

            {/* Decorative window controls */}
            <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-700" />
            </div>
        </div>
    );
}