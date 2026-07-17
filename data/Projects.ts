import type { Project } from "../types/Project";
import { ProjectEngine } from "../types/ProjectEngine";
import { ProjectStatus } from "../types/ProjectStatus";

// thumbnails
import RomanRtsThumbnail from "../src/assets//ProjectThumbnails/roman-helmet.svg";
import MansBestFriendThumbnail from "../src/assets//ProjectThumbnails/MansBestFriend_1610.png";
import CastNoShadowThumbnail from "../src/assets//ProjectThumbnails/CastNoShadows.png";
import SpreadEmThumbnail from "../src/assets//ProjectThumbnails/SpreadEm.png";
import GraphicsProgrammingThumbnail from "../src/assets/ProjectThumbnails/GraphicsProgramming.png"
import EngineProgrammingThumbnail from "../src/assets/ProjectThumbnails/EngineProgramming.png"
import AIProgrammingThumbnail from "../src/assets/ProjectThumbnails/GOAP_AI.png"

export const projects: Project[] = [
    {
        id: "roman-rts",

        title: "Project Legatus",

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
        release: "",
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

        thumbnail: MansBestFriendThumbnail,

        github: "",
        release: "https://mathiesvdb.itch.io/mans-best-friend",
    },
    {
        id: "cast-no-shadow",

        title: "Cast No Shadow",

        subtitle: "Co-op stealth game",

        description:
            "A co-op stealth game that was made in unreal engine 5 for the course 'Game projects' at the Howest University of Applied Sciences.",

        engine: ProjectEngine.UE5,

        language: "Modern C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Game AI",
            "Gameplay",
            "Stealth",
            "co-op",
            "Behavior Trees",
        ],

        thumbnail: CastNoShadowThumbnail,

        github: "",
        release: "https://warre-adriaensen.itch.io/cast-no-shadow",
    },
    {
        id: "sperad-em",

        title: "Spread 'Em",

        subtitle: "top-down/side-view single-player game",

        description:
            "Spread 'Em is a top-down/side-view single-player game where your goal is to infect everyone in a lab. This game was made for a game jam in 3 days.",

        engine: ProjectEngine.Unity,

        language: "C#",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Game AI",
            "Gameplay",
        ],

        thumbnail: SpreadEmThumbnail,

        github: "",
        release: "https://stevenchiefo.itch.io/spread-em",
    },
    {
        id: "graphics-programming",

        title: "Graphics Programming",

        subtitle: "Educational project for learning graphics programming",

        description:
            "A collection of graphics programming projects developed as part of my Graphics Programming coursework then expanded on outside of school. This project contains two standalone rendering applications built from scratch in C++",

        engine: ProjectEngine.CustomFramework,

        language: "C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "Graphics Programming",
            "Rendering",
            "directx",
            "HLSL",
        ],

        thumbnail: GraphicsProgrammingThumbnail,

        github: "https://github.com/indypottie/GraphicsProgramming",
        release: "",
    },
    {
        id: "engine-programming",

        title: "Custom engine",

        subtitle: "Custom C++ 2d engine",

        description:
            "A custom C++ game engine, originally made for the prog4 course then expanded by me outside of school, this engine is fully made from scratch in C++.",

        engine: ProjectEngine.CustomEngine,

        language: "C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "C++",
            "Engine programming"
        ],

        thumbnail: EngineProgrammingThumbnail,

        github: "https://github.com/indypottie/CustomEngine",
        release: "",
    },
    {
        id: "goap-ai",

        title: "GOAP-AI research",

        subtitle: "GOAP-AI made in a custom framework.",

        description:
            "A GOAP-AI made originally for the gameplay programming course then expanded by me outside school.",

        engine: ProjectEngine.CustomFramework,

        language: "C++",

        status: ProjectStatus.Completed,

        featured: false,

        tags: [
            "C++",
            "AI-Programming",
            "GOAP",
            "Research"
        ],

        thumbnail: AIProgrammingThumbnail,

        github: "https://github.com/indypottie/GOAP_AI",
        release: "",
    },
];