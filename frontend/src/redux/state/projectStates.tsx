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
        {
            id: "1",
            name: "onlinenot.org new",
            description: "Free Guiat Tab and chord website base on (ReacJS, NodeJs, MongoDB)",
        },
    ],
};
