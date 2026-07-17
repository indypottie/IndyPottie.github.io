import Page from "../components/layout/Page";

import {

    SkillsHero,
    SkillCategories,
    SkillsFocus,
    SkillsWorkflow,

} from "../components/sections/pages/Skills";

export default function Skills() {

    return (

        <Page>

            <SkillsHero />

            <SkillCategories />

            <SkillsFocus />

            <SkillsWorkflow />

        </Page>

    );

}