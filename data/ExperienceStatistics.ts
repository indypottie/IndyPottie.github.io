export interface ExperienceStatistic {

    title: string;

    value: number | string;

    description: string;

    suffix?: string;

}

export const experienceStatistics: ExperienceStatistic[] = [

    {

        title: "YEARS",

        value: 7,

        suffix: "+",

        description: "Programming Experience",

    },

    {

        title: "INDUSTRY",

        value: 1,

        description: "Professional Internship",

    },

    {

        title: "PROJECTS",

        value: 6,

        suffix: "+",

        description: "Completed Projects",

    },

    {

        title: "FOCUS",

        value: "AI",

        description: "Gameplay & Systems",

    },

];