import { ADD_EXPERIENCE, ExperienceType, UPDATE_EXPERIENCE } from "../state/experienceStates";

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
