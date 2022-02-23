import { ADD_INTEREST, GET_INTERESTS, UPDATE_INTEREST } from "../actions/actionTypes";
import { InterestAction } from "../actions/interestActions";
import { initialInterestsState, InterestsState } from "../state/interestStates";


export const interestsReducer = (
    state: InterestsState = initialInterestsState,
    action: InterestAction
) => {
    switch (action.type) {
        case GET_INTERESTS: {
            return {
                ...state,
                interests: action.payload
            };
        }
        case ADD_INTEREST: {
            return {
                ...state,
                interests: [...state.interests, action.payload]
            };
        }
        case UPDATE_INTEREST: {
            return {
                ...state,
                interests: state.interests.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        default:
            return state;
    }
};
