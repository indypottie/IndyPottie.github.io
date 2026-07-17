import type { ButtonProps } from "./Button.types";

export default function Button({

    children,

    variant = "outlined",

    icon,

    className = "",

    ...props

}: ButtonProps) {

    const baseClasses = `
        inline-flex
        cursor-pointer
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
        `,

        outlined: `
            border-zinc-700
            bg-zinc-900/70
            text-zinc-200
            hover:border-zinc-500
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

    return (

        <button

            {...props}

            className={`${baseClasses} ${variants[variant]} ${className}`}

        >

            {icon}

            {children}

        </button>

    );

}