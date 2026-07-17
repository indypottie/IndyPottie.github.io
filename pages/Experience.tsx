import Page from "../components/layout/Page";

import {

    ExperienceHero,
    ExperienceStatistics,
    ExperienceTimeline,

} from "../components/sections/pages/Experience";

export default function Experience() {

    return (

        <Page>

            <ExperienceHero />

            <ExperienceStatistics />

            <ExperienceTimeline />

        </Page>

    );

}