
import { ADD_EXPERIENCE, DELETE_EXPERIENCE, GET_EXPERIENCES, UPDATE_EXPERIENCE } from "../actions/actionTypes";
import { ExperienceAction } from "../actions/experienceActions";
import { initialExperienceState } from "../state/experienceStates";


export const experiencesReducer = (
    state = initialExperienceState,
    action: ExperienceAction
) => {
    switch (action.type) {
        case ADD_EXPERIENCE: {
            return {
                ...state,
                experiences: [...state.experiences, action.payload]
            };
        }
        case GET_EXPERIENCES: {
            return {
                ...state,
                experiences: action.payload
            };
        }
        case UPDATE_EXPERIENCE: {
            return {
                ...state,
                experiences: state.experiences.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        case DELETE_EXPERIENCE: {
            return {
                ...state,
                experiences: state.experiences.filter(item => item.id !== action.payload)
            };
        }
        default:
            return state;
    }
};
