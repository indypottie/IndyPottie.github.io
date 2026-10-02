import Section from "../../ui/Section";

import HeroContent from "../../Hero/HeroContent";
import HeroDetails from "../../Hero/HeroDetails";

export default function Hero() {
    return (
        <Section
            id="hero"
            className="flex min-h-screen items-start pt-20 pb-16 lg:pt-24 lg:pb-24"
        >
            <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

                <HeroContent />

                <HeroDetails />

            </div>
        </Section>
    );
}