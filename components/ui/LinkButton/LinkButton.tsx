import { Link } from "react-router-dom";

import type { LinkButtonProps } from "./LinkButton.types";

export default function LinkButton({

    children,

    variant = "outlined",

    icon,

    className = "",

    external = false,

    to,

    href,

    ...props

}: LinkButtonProps) {

    const baseClasses = `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-md
        border
        px-5
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-lg
        active:translate-y-0
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500/40
    `;

    const variants = {

        filled: `
            border-blue-600
            bg-blue-600
            text-white
            hover:bg-blue-500
            hover:border-blue-500
        `,

        outlined: `
            border-zinc-700
            bg-zinc-900/70
            text-zinc-200
            hover:border-blue-500/40
            hover:bg-zinc-800
        `,

        ghost: `
            border-transparent
            bg-transparent
            text-zinc-300
            hover:text-white
            hover:bg-zinc-800/50
        `,

    };

    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    if (external) {

        return (

            <a

                {...props}

                href={href}

                target="_blank"

                rel="noopener noreferrer"

                className={classes}

            >

                {icon}

                {children}

            </a>

        );

    }

    return (

        <Link

            to={to ?? "/"}

            className={classes}

        >

            {icon}

            {children}

        </Link>

    );

}