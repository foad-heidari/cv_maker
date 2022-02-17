import { ADD_INTERST, UPDATE_INTERST } from "../actions/actionTypes";
import { InterestAction } from "../actions/interestActions";
import { initialInterestsState, InterestsState } from "../state/interestStates";


export const interestsReducer = (
    state: InterestsState = initialInterestsState,
    action: InterestAction
) => {
    switch (action.type) {
        case ADD_INTERST: {
            return {
                ...state,
                interests: [...state.interests, action.payload]
            };
        }
        case UPDATE_INTERST: {
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
