interface PropertyLinkRowProps {

    label: string;

    href: string;

    children: React.ReactNode;

}

export default function PropertyLinkRow({

    label,

    href,

    children

}: PropertyLinkRowProps) {

    const external =

        href.startsWith("http");

    return (

        <div className="flex items-center justify-between border-b border-zinc-800 py-4">

            <span className="text-zinc-500">

                {label}

            </span>

            <a

                href={href}

                target={external ? "_blank" : undefined}

                rel={external ? "noopener noreferrer" : undefined}

                className="
                    font-medium
                    text-blue-400
                    transition-colors
                    hover:text-blue-300
                "

            >

                {children}

            </a>

        </div>

    );

}