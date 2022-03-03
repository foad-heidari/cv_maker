import { ADD_CV, GET_CVS, UPDATE_CV } from "./actionTypes";
import { CVType } from "../state/cvStates";


export type CVAction = { type: string; payload: CVType };

export const getCV = (cv: CVType): CVAction => {
    return {
        type: GET_CVS,
        payload: cv,
    };
};

export const addCV = (cv: CVType): CVAction => {
    return {
        type: ADD_CV,
        payload: cv,
    };
};

export const updateCV = (cv: CVType): CVAction => ({
    type: UPDATE_CV,
    payload: cv,
});
