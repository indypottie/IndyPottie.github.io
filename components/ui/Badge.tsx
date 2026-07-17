interface BadgeProps {

    children: React.ReactNode;

}

export default function Badge({

    children,

}: BadgeProps){

    return(

        <div
            className="
            rounded-md
            border
            border-zinc-700
            bg-zinc-800/40
            px-3
            py-2
            text-sm
            "
        >

            {children}

        </div>

    );

}