import axios from "axios";
import { Dispatch } from "redux";
import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from "./actionTypes";
import { ProjectType } from "../state/projectStates";
import { PROJECTS_URL } from "../../utils/APIUrls";

export type ProjectAction = { type: string; payload: any };


export const addProject = (payload: { cv: string, order: number }) => {
    return async function addProjectThunk(dispatch: Dispatch) {
        const res = await axios.post(PROJECTS_URL, payload);
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
            await axios.put(`${PROJECTS_URL}${payload.id}/`, payload);
        }
        dispatch({
            type: UPDATE_PROJECT,
            payload: payload
        });
    };
};

export const deleteProject = (id: string) => {
    return async function deleteProjectThunk(dispatch: Dispatch) {
        await axios.delete(PROJECTS_URL + id);
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        });
    };
};

