import { ADD_INTERST, UPDATE_INTERST } from "./actionTypes";
import { InterestType } from "../state/interestStates";

export type InterestAction = { type: string; payload: InterestType };

export const addInterest = (interest: InterestType): InterestAction => {
    return {
        type: ADD_INTERST,
        payload: interest,
    };
};

export const updateInterest = (interest: InterestType): InterestAction => ({
    type: UPDATE_INTERST,
    payload: interest,
});
