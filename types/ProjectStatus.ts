export const ProjectStatus = {
    InDevelopment: "In Development",
    Completed: "Completed",
    Prototype: "Prototype",
    OnHold: "On Hold",
} as const;

export type ProjectStatus =
    (typeof ProjectStatus)[keyof typeof ProjectStatus];