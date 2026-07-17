import type { ProjectStatus } from "./ProjectStatus";
import type { ProjectEngineType } from "./ProjectEngine";

export interface Project {

    id: string;

    title: string;

    subtitle: string;

    description: string;

    engine: ProjectEngineType;

    language: string;

    status: ProjectStatus;

    featured: boolean;

    tags: string[];

    thumbnail: string;

    github?: string;

    demo?: string;

}