import { ADD_INTEREST, DELETE_INTEREST, GET_INTERESTS, UPDATE_INTEREST } from "../../actions/actionTypes";
import { InterestAction } from "../../actions/cv_actions/interestActions";
import { initialInterestsState, InterestsState } from "../../state/cv_states/interestStates";


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
        case DELETE_INTEREST: {
            return {
                ...state,
                interests: state.interests.filter(item => item.id !== action.payload)
            };
        }
        default:
            return state;
    }
};
