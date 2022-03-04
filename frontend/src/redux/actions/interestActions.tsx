import axios from "axios";
import { Dispatch } from "redux";
import { ADD_INTEREST, DELETE_INTEREST, GET_INTERESTS, UPDATE_INTEREST } from "./actionTypes";
import { InterestType } from "../state/interestStates";
import { INTERESTS_URL } from "../../utils/APIUrls";

export type InterestAction = { type: string; payload: any }

export const addInterest = (payload: { cv: string, order: number }) => {
    return async function addLanguageThunk(dispatch: Dispatch) {
        const res = await axios.post(INTERESTS_URL, payload);
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
            await axios.put(`${INTERESTS_URL}${payload.id}/`, payload);
        }
        dispatch({
            type: UPDATE_INTEREST,
            payload: payload
        });
    };
};


export const deleteInterest = (id: string) => {
    return async function deleteInterest(dispatch: Dispatch) {
        await axios.delete(INTERESTS_URL + id);
        dispatch({
            type: DELETE_INTEREST,
            payload: id
        });
    };
};
