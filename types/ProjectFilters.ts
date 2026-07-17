export const ProjectFilters = {

    All: "All",

    Featured: "Featured",

    Completed: "Completed",

    InDevelopment: "In Development",

} as const;

export type ProjectFilter =
    (typeof ProjectFilters)[keyof typeof ProjectFilters];

export const ProjectFilterValues: ProjectFilter[] = [

    ProjectFilters.All,

    ProjectFilters.Featured,

    ProjectFilters.InDevelopment,

    ProjectFilters.Completed,

];