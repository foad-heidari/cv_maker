import { ADD_PROJECT, ProjectType, UPDATE_PROJECT } from "../state/projectStates";

export type ProjectAction = { type: string; payload: ProjectType };

export const addProject = (project: ProjectType): ProjectAction => {
    return {
        type: ADD_PROJECT,
        payload: project,
    };
};

export const updateProject = (project: ProjectType): ProjectAction => ({
    type: UPDATE_PROJECT,
    payload: project,
});
