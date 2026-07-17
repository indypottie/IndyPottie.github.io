import Page from "../components/layout/Page";

import Hero from "../components/sections/home/Hero";
import FeaturedProjects from "../components/sections/home/FeaturedProjects";
import FeaturedExperience from "../components/sections/home/FeaturedExperience";
import Contact from "../components/sections/home/Contact";

import Reveal from "../components/ui/Reveal";

export default function Home() {

    return (

        <Page>

            <Reveal>

                <Hero />

            </Reveal>

            <Reveal delay={0.05}>

                <FeaturedProjects />

            </Reveal>

            <Reveal delay={0.10}>

                <FeaturedExperience />

            </Reveal>

            <Reveal delay={0.15}>

                <Contact />

            </Reveal>

        </Page>

    );

}