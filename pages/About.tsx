import Page from "../components/layout/Page";

import {

    AboutHero,
    AboutIdentity,
    AboutMe,
    CoreValues,
    Interests,

} from "../components/sections/pages/About";

export default function About() {

    return (

        <Page>

            <AboutHero />

            <AboutIdentity />

            <AboutMe />

            <CoreValues />

            <Interests />

        </Page>

    );

}