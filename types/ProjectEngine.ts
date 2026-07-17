export const ProjectEngine = {
    UE5: "UE5",
    Unity: "Unity",
    Godot: "Godot",
    CustomEngine: "Custom Engine",
    CustomFramework: "Custom Framework",
} as const;

export type ProjectEngineType =
    (typeof ProjectEngine)[keyof typeof ProjectEngine];