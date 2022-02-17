import { ADD_EDUCATION, EducationType, UPDATE_EDUCATION } from "../state/educationStates";

export type EducationAction = { type: string; payload: EducationType };

export const addEducation = (education: EducationType): EducationAction => {

    return {
        type: ADD_EDUCATION,
        payload: education,
    };
};

export const updateEducation = (education: EducationType): EducationAction => ({
    type: UPDATE_EDUCATION,
    payload: education,
});
