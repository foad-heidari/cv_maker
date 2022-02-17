export const ADD_PROJECT = "ADD_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";


export interface ProjectType {
    id: number;
    name: string;
    description: string;
}

export interface ProjectState {
    projects: ProjectType[];
}

export const initialProjectState: ProjectState = {
    projects: [
        {
            id: 1,
            name: "onlinenot.org new",
            description: "Free Guiat Tab and chord website base on (ReacJS, NodeJs, MongoDB)",
        },
        {
            id: 2,
            name: "DjBooking",
            description: "Free and open source booking package for django",
        },
    ],
};
