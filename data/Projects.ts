import type { Project } from "../types/Project";
import { ProjectEngine } from "../types/ProjectEngine";
import { ProjectStatus } from "../types/ProjectStatus";

// thumbnails
import RomanRtsThumbnail from "../src/assets/layout_wine_x2.png";

export const projects: Project[] = [
    {
        id: "roman-rts",

        title: "Roman RTS",

        subtitle: "Game AI & Systems",

        description:
            "A portfolio RTS focused on scalable architecture, Game AI and gameplay systems.",

        engine: ProjectEngine.UE5,

        language: "Modern C++",

        status: ProjectStatus.InDevelopment,

        featured: true,

        tags: [
            "Game AI",
            "GOAP",
            "Gameplay",
            "State Trees",
        ],

        thumbnail: RomanRtsThumbnail,

        github: "https://github.com/indypottie/ProjectLegatus",
        demo: "",
    },
    {
        id: "mans-best-friend",

        title: "Mans Best Friend",

        subtitle: "Horror Game",

        description:
            "A horror game that was made for the course 'Group Projects' at the Howest University of Applied Sciences. In this course we had 1 semester (11 weeks) to make any game of our liking, with any engine.",

        engine: ProjectEngine.UE5,

        language: "Modern C++",

        status: ProjectStatus.Completed,

        featured: true,

        tags: [
            "Game AI",
            "Gameplay",
            "State Trees",
        ],

        thumbnail: "",

        github: "",
        demo: "https://mathiesvdb.itch.io/mans-best-friend",
    },

    /* test projects */
    {
        id: "test_project_1",

        title: "Test Project 1",

        subtitle: "Test Project 1 Subtitle",

        description:
            "This is a test project for testing purposes. It is not a real project and should not be taken seriously.",

        engine: ProjectEngine.CustomEngine,

        language: "Modern C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Game AI",
            "Gameplay",
            "State Trees",
        ],

        thumbnail: "",

        github: "",
        demo: "",
    },
    {
        id: "test_project_2",

        title: "Test Project 2",

        subtitle: "Test Project 2 Subtitle",

        description:
            "This is a test project for testing purposes. It is not a real project and should not be taken seriously.",

        engine: ProjectEngine.CustomEngine,

        language: "Modern C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Game AI",
            "Gameplay",
            "State Trees",
        ],

        thumbnail: "",

        github: "",
        demo: "",
    },
    {
        id: "test_project_3",

        title: "Test Project 3",

        subtitle: "Test Project 3 Subtitle",

        description:
            "This is a test project for testing purposes. It is not a real project and should not be taken seriously.",

        engine: ProjectEngine.UE5,

        language: "Modern C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Game AI",
            "Gameplay",
            "State Trees",
        ],

        thumbnail: "",

        github: "",
        demo: "",
    },
    {
        id: "test_project_4",

        title: "Test Project 4",

        subtitle: "Test Project 4 Subtitle",

        description:
            "This is a test project for testing purposes. It is not a real project and should not be taken seriously.",

        engine: ProjectEngine.Godot,

        language: "Modern C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Game AI",
            "Gameplay",
            "State Trees",
        ],

        thumbnail: "",

        github: "",
        demo: "",
    },
];