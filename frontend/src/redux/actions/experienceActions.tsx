import { ADD_EXPERIENCE, UPDATE_EXPERIENCE } from "./actionTypes";
import { ExperienceType } from "../state/experienceStates";

export type ExperienceAction = { type: string; payload: ExperienceType };

export const addExperience = (experience: ExperienceType): ExperienceAction => {
    return {
        type: ADD_EXPERIENCE,
        payload: experience,
    };
};

export const updateExperience = (experience: ExperienceType): ExperienceAction => ({
    type: UPDATE_EXPERIENCE,
    payload: experience,
});
