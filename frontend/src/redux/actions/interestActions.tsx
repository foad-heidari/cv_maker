import { ADD_INTERST, InterestType, UPDATE_INTERST } from "../state/interestStates";

export type Action = { type: string; payload: InterestType };

export const updateInterest = (interest: InterestType): Action => ({
    type: UPDATE_INTERST,
    payload: interest,
});

export const addInterest = (interest: InterestType): Action => {

    return {
        type: ADD_INTERST,
        payload: interest,
    };
};
