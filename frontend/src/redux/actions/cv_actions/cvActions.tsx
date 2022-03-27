import axios from "axios";
import { Dispatch } from "redux";
import { CV_URL } from "../../../utils/APIUrls";
import { getUserHeaderToken } from "../../../utils/sharedUserFunctions";
import { CVType } from "../../state/cv_states/cvStates";
import { ADD_CV, GET_CVS, UPDATE_CV } from "../actionTypes";

export type CVAction = { type: string; payload: any };

export const getCVs = () => {
    return async function getCVsThunk(dispatch: Dispatch) {
        const res = await axios.get(CV_URL, getUserHeaderToken());
        dispatch({
            type: GET_CVS,
            payload: res.data.results
        });
    };
};

export const addCV = () => {
    return async function getCVsThunk(dispatch: Dispatch) {
        try {
            const res = await axios.post(CV_URL, {}, getUserHeaderToken());

            dispatch({
                type: ADD_CV,
                payload: res.data
            });
            return {
                error: null,
                result: res.data.id
            };
        } catch {
            return {
                error: true,
                result: false
            };
        }

    };
};
export const updateCV = (cv: CVType): CVAction => ({
    type: UPDATE_CV,
    payload: cv,
});
