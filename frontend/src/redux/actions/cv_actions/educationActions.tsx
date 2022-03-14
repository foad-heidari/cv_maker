import axios from "axios";
import { Dispatch } from "redux";
import { EDUCATIONS_URL } from "../../../utils/APIUrls";
import { EducationType } from "../../state/cv_states/educationStates";
import { ADD_EDUCATION, DELETE_EDUCATION, GET_EDUCATIONS, UPDATE_EDUCATION } from "../actionTypes";

export type EducationAction = { type: string; payload: any };


export const addEducation = (payload: { cv: string, order: number }) => {
    return async function addEducationThunk(dispatch: Dispatch) {
        const res = await axios.post(EDUCATIONS_URL, payload);
        dispatch({
            type: ADD_EDUCATION,
            payload: res.data
        });
    };
};

export const getEducation = (education: EducationType): EducationAction => {
    return {
        type: GET_EDUCATIONS,
        payload: education,
    };
};

export const updateEducation = (payload: EducationType, save = false) => {
    return async function updateEducationThunk(dispatch: Dispatch) {
        if (save) {
            await axios.put(`${EDUCATIONS_URL}${payload.id}/`, payload);
        }

        dispatch({
            type: UPDATE_EDUCATION,
            payload: payload
        });
    };
};

export const deleteEducation = (id: string) => {
    return async function deleteEducationThunk(dispatch: Dispatch) {
        await axios.delete(EDUCATIONS_URL + id);
        dispatch({
            type: DELETE_EDUCATION,
            payload: id
        });
    };
};
