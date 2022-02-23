import { Dispatch } from "redux";
import axios from "axios";

import { ADD_INTEREST, GET_INTERESTS, UPDATE_INTEREST } from "./actionTypes";
import { InterestType } from "../state/interestStates";
import { INTERESTS_URL } from "../../utils/APIUrls";

export type InterestAction = { type: string; payload: any }


export const getInterests = () => {
    return async function getInterestsThunk(dispatch: Dispatch) {
        const res = await axios.get(INTERESTS_URL);
        dispatch({
            type: GET_INTERESTS,
            payload: res.data.results
        });
    };
};

export const addInterest = (interest: InterestType): InterestAction => ({
    type: ADD_INTEREST,
    payload: interest,
});

export const updateInterest = (interest: InterestType): InterestAction => ({
    type: UPDATE_INTEREST,
    payload: interest,
});
