import axios from "axios";
import { Dispatch } from "redux";
import { PROJECTS_URL } from "../../../utils/APIUrls";
import { getUserHeaderToken } from "../../../utils/sharedUserFunctions";
import { ProjectType } from "../../state/cv_states/projectStates";
import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from "../actionTypes";


export type ProjectAction = { type: string; payload: any };


export const addProject = (payload: { cv: string, order: number }) => {
    return async function addProjectThunk(dispatch: Dispatch) {
        const res = await axios.post(PROJECTS_URL, payload, getUserHeaderToken());
        dispatch({
            type: ADD_PROJECT,
            payload: res.data
        });
    };
};

export const getProjects = (payload: ProjectType): ProjectAction => {
    return {
        type: GET_PROJECTS,
        payload,
    };
};


export const updateProject = (payload: ProjectType, save = false) => {
    return async function updateProjectThunk(dispatch: Dispatch) {
        if (save) {
            await axios.put(`${PROJECTS_URL}${payload.id}/`, payload, getUserHeaderToken());
        }
        dispatch({
            type: UPDATE_PROJECT,
            payload: payload
        });
    };
};

export const deleteProject = (id: string) => {
    return async function deleteProjectThunk(dispatch: Dispatch) {
        await axios.delete(PROJECTS_URL + id, getUserHeaderToken());
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        });
    };
};

