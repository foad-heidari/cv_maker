import { ADD_CV } from "../actions/actionTypes";
import { CVAction } from "../actions/cvActions";
import { initialCVState } from "../state/cvStates";

export const cvReducer = (
    state = initialCVState,
    action: CVAction
) => {

    switch (action.type) {
        case ADD_CV: {
            return {
                ...state,
                cvs: [...state.cvs, action.payload]
            };
        }
        default:
            return state;
    }
};
