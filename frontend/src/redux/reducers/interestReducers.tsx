import { InterestAction } from "../actions/interestActions";
import { ADD_INTERST, initialInterestsState, InterestsState, UPDATE_INTERST } from "../state/interestStates";


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
            const index = state.interests.findIndex(item => item.id === action.payload.id);
            const newArray = [...state.interests];
            newArray[index] = action.payload;

            return {
                ...state,
                interests: newArray
            };
        }
        default:
            return state;
    }
};
