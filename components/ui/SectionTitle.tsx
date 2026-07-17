interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({
    title,
    subtitle,
}: SectionTitleProps) {
    return (
        <div className="mb-12">
            <h2 className="font-['Space_Grotesk'] text-4xl font-bold">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-2 text-zinc-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}