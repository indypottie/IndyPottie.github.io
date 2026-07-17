import { useEffect, useState } from "react";

interface AnimatedCounterProps {

    value: number;

    duration?: number;

    suffix?: string;

}

export default function AnimatedCounter({

    value,

    duration = 700,

    suffix = "",

}: AnimatedCounterProps) {

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {

        let start = 0;

        const increment = value / (duration / 16);

        const timer = setInterval(() => {

            start += increment;

            if (start >= value) {

                setDisplayValue(value);

                clearInterval(timer);

                return;

            }

            setDisplayValue(Math.floor(start));

        }, 16);

        return () => clearInterval(timer);

    }, [value, duration]);

    return (

        <span className="text-5xl font-black">

            {displayValue}

            {suffix}

        </span>

    );

}