import { ADD_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from "./actionTypes";
import { ProjectType } from "../state/projectStates";

export type ProjectAction = { type: string; payload: any };

export const addProject = (payload: ProjectType): ProjectAction => {
    return {
        type: ADD_PROJECT,
        payload,
    };
};

export const getProjects = (payload: ProjectType): ProjectAction => {
    return {
        type: GET_PROJECTS,
        payload,
    };
};


export const updateProject = (payload: ProjectType): ProjectAction => ({
    type: UPDATE_PROJECT,
    payload,
});
