import { ADD_INTEREST, GET_INTERESTS, UPDATE_INTEREST } from "./actionTypes";
import { InterestType } from "../state/interestStates";

export type InterestAction = { type: string; payload: any }


// export const getInterests = () => {
//     return async function getInterestsThunk(dispatch: Dispatch) {
//         const res = await axios.get(INTERESTS_URL);
//         dispatch({
//             type: GET_INTERESTS,
//             payload: res.data.results
//         });
//     };
// };

export const getInterests = (interest: InterestType): InterestAction => ({
    type: GET_INTERESTS,
    payload: interest,
});

export const addInterest = (interest: InterestType): InterestAction => ({
    type: ADD_INTEREST,
    payload: interest,
});

export const updateInterest = (interest: InterestType): InterestAction => ({
    type: UPDATE_INTEREST,
    payload: interest,
});
