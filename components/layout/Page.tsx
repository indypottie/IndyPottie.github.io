import type { ReactNode } from "react";

interface PageProps {

    children: ReactNode;

}

export default function Page({

    children,

}: PageProps) {

    return (

        <main

            className="
                relative
                z-10
                mx-auto
                max-w-7xl
                px-8
                pt-36
                pb-32
            "

        >

            {children}

        </main>

    );

}