import Section from "../../ui/Section";

import HeroContent from "../../Hero/HeroContent";
import HeroDetails from "../../Hero/HeroDetails";

export default function Hero() {
    return (
        <Section
            id="hero"
            className="flex min-h-screen items-center"
        >
            <div className="grid w-full gap-20 lg:grid-cols-[1.1fr_0.9fr]">

                <HeroContent />

                <HeroDetails />

            </div>
        </Section>
    );
}