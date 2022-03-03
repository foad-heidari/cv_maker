import axios from "axios";
import { Dispatch } from "redux";
import { ADD_EXPERIENCE, GET_EXPERIENCES, UPDATE_EXPERIENCE } from "./actionTypes";
import { ExperienceType } from "../state/experienceStates";
import { EXPERIENCES_URL } from "../../utils/APIUrls";

export type ExperienceAction = { type: string; payload: any };

export const addExperience = (payload: { cv: string, order: number }) => {
    return async function addExperienceThunk(dispatch: Dispatch) {
        const res = await axios.post(EXPERIENCES_URL, payload);
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

export const updateExperience = (payload: ExperienceType): ExperienceAction => ({
    type: UPDATE_EXPERIENCE,
    payload,
});
