import axios from "axios";
import { Dispatch } from "redux";
import { EXPERIENCES_URL } from "../../../utils/APIUrls";
import { getUserHeaderToken } from "../../../utils/sharedUserFunctions";
import { ExperienceType } from "../../state/cv_states/experienceStates";
import { ADD_EXPERIENCE, DELETE_EXPERIENCE, GET_EXPERIENCES, UPDATE_EXPERIENCE } from "../actionTypes";


export type ExperienceAction = { type: string; payload: any };

export const addExperience = (payload: { cv: string, order: number }) => {
    return async function addExperienceThunk(dispatch: Dispatch) {
        const res = await axios.post(EXPERIENCES_URL, payload, getUserHeaderToken());
        dispatch({
            type: ADD_EXPERIENCE,
            payload: res.data
        });
    };
};

export const getExperiences = (payload: ExperienceType): ExperienceAction => {
    return {
        type: GET_EXPERIENCES,
        payload,
    };
};


export const updateExperience = (payload: ExperienceType, save = false) => {
    return async function updateExperienceThunk(dispatch: Dispatch) {
        if (save) {
            await axios.put(`${EXPERIENCES_URL}${payload.id}/`, payload,getUserHeaderToken());
        }

        dispatch({
            type: UPDATE_EXPERIENCE,
            payload: payload
        });
    };
};


export const deleteExperience = (id: string) => {
    return async function deleteExperienceThunk(dispatch: Dispatch) {
        await axios.delete(EXPERIENCES_URL + id, getUserHeaderToken());
        dispatch({
            type: DELETE_EXPERIENCE,
            payload: id
        });
    };
};
