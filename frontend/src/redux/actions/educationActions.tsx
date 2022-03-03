import { ADD_EDUCATION, GET_EDUCATIONS, UPDATE_EDUCATION } from "./actionTypes";
import { EducationType } from "../state/educationStates";

export type EducationAction = { type: string; payload: any };

export const addEducation = (education: EducationType): EducationAction => {
    return {
        type: ADD_EDUCATION,
        payload: education,
    };
};

export const getEducation = (education: EducationType): EducationAction => {
    return {
        type: GET_EDUCATIONS,
        payload: education,
    };
};

export const updateEducation = (education: EducationType): EducationAction => ({
    type: UPDATE_EDUCATION,
    payload: education,
});
