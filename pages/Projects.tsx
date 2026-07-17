import Page from "../components/layout/Page";

import {

    ProjectsHero,
    ProjectsStatistics,
    FlagshipProject,
    ProjectsGrid,

} from "../components/sections/pages/Projects";

export default function Projects() {

    return (

        <Page>

            <ProjectsHero />

            <ProjectsStatistics />

            <FlagshipProject />

            <ProjectsGrid />

        </Page>

    );

}