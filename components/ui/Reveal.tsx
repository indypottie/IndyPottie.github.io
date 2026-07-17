import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {

    children: ReactNode;

    delay?: number;

}

export default function Reveal({

    children,

    delay = 0,

}: RevealProps) {

    return (

        <motion.div

            initial={{

                opacity: 0,

                y: 40,

            }}

            whileInView={{

                opacity: 1,

                y: 0,

            }}

            viewport={{

                once: true,

                amount: .2,

            }}

            transition={{

                duration: .55,

                delay,

                ease: [0.22,1,0.36,1],

            }}

        >

            {children}

        </motion.div>

    );

}