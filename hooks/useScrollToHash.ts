import { useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function useScrollToHash() {

    const { hash, pathname } = useLocation();

    useEffect(() => {

        if (!hash)
            return;

        const id = hash.replace("#", "");

        requestAnimationFrame(() => {

            const element = document.getElementById(id);

            if (!element)
                return;

            element.scrollIntoView({

                behavior: "smooth",

                block: "start",

            });

        });

    }, [

        pathname,

        hash,

    ]);

}