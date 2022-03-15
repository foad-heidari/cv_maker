import axios from "axios";
import { Dispatch } from "redux";
import { EDUCATIONS_URL } from "../../../utils/APIUrls";
import { CVType } from "../../state/cv_states/cvStates";
import { ADD_CV, GET_CVS, UPDATE_CV } from "../actionTypes";

export type CVAction = { type: string; payload: CVType };

export const getCVs = () => {
    return async function getCVsThunk(dispatch: Dispatch) {
        const res = await axios.post(EDUCATIONS_URL);
        dispatch({
            type: GET_CVS,
            payload: res.data
        });
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
