import { EducationAction } from "../actions/educationActions";
import { ADD_EDUCATION, initialEducationState, UPDATE_EDUCATION } from "../state/educationStates";

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
        case UPDATE_EDUCATION: {
            const index = state.educations.findIndex(item => item.id === action.payload.id);
            const newArray = [...state.educations];
            newArray[index] = action.payload;

            return {
                ...state,
                educations: newArray
            };
        }
        default:
            return state;
    }
};
