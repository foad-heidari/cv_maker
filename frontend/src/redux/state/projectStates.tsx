export interface ProjectType {
    id: string;
    name: string;
    description: string;
}

export interface ProjectState {
    projects: ProjectType[];
}

export const initialProjectState: ProjectState = {
    projects: [
    ],
};
