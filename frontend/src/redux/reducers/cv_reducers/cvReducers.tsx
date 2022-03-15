import { ADD_CV, GET_CVS } from "../../actions/actionTypes";
import { CVAction } from "../../actions/cv_actions/cvActions";
import { initialCVState } from "../../state/cv_states/cvStates";

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
        case GET_CVS: {
            return {
                ...state,
                cvs: action.payload
            };
        }
        default:
            return state;
    }
};
