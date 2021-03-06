import axios from "axios";
import { Dispatch } from "redux";
import { INTERESTS_URL } from "../../../utils/APIUrls";
import { getUserHeaderToken } from "../../../utils/sharedUserFunctions";
import { InterestType } from "../../state/cv_states/interestStates";
import { ADD_INTEREST, DELETE_INTEREST, GET_INTERESTS, UPDATE_INTEREST } from "../actionTypes";


export type InterestAction = { type: string; payload: any }

export const addInterest = (payload: { cv: string, order: number }) => {
    return async function addInterestThunk(dispatch: Dispatch) {
        const res = await axios.post(INTERESTS_URL, payload, getUserHeaderToken());
        dispatch({
            type: ADD_INTEREST,
            payload: res.data
        });
    };
};

export const getInterests = (interest: InterestType): InterestAction => ({
    type: GET_INTERESTS,
    payload: interest,
});

export const updateInterest = (payload: InterestType, save = false) => {
    return async function updateInterestThunk(dispatch: Dispatch) {
        if (save) {
            await axios.put(`${INTERESTS_URL}${payload.id}/`, payload, getUserHeaderToken());
        }
        dispatch({
            type: UPDATE_INTEREST,
            payload: payload
        });
    };
};


export const deleteInterest = (id: string) => {
    return async function deleteInterest(dispatch: Dispatch) {
        await axios.delete(INTERESTS_URL + id, getUserHeaderToken());
        dispatch({
            type: DELETE_INTEREST,
            payload: id
        });
    };
};
