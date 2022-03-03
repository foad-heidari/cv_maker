import { ADD_EDUCATION, GET_EDUCATIONS, UPDATE_EDUCATION } from "../actions/actionTypes";
import { EducationAction } from "../actions/educationActions";
import { initialEducationState } from "../state/educationStates";

export const educationsReducer = (
    state = initialEducationState,
    action: EducationAction
) => {
    switch (action.type) {
        case ADD_EDUCATION: {
            return {
                ...state,
                educations: [...state.educations, action.payload]
            };
        }
        case GET_EDUCATIONS: {
            return {
                ...state,
                educations: action.payload
            };
        }
        case UPDATE_EDUCATION: {
            return {
                ...state,
                educations: state.educations.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        default:
            return state;
    }
};
