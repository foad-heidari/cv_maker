import axios from "axios";
import { ADD_CV, UPDATE_CV } from "./actionTypes";
import { CVType } from "../state/cvStates";
import { INTERESTS_URL } from "../../utils/APIUrls";

export type CVAction = { type: string; payload: CVType };

export const getInterestsApi = async () => {
    const res = await axios.get(INTERESTS_URL);
    return res.data.results;
};


export const getCV = (cv: CVType): CVAction => {
    return {
        type: ADD_CV,
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
