export interface Experience {

    id: string;

    company: string;

    role: string;

    project?: string;

    startYear: number;

    duration: string;

    location: string;

    description: string;

    engines: string[];

    languages: string[];

    technologies: string[];

    highlights?: string[];

    status: string;

}