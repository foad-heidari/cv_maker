
import { ADD_EXPERIENCE, UPDATE_EXPERIENCE } from "../actions/actionTypes";
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
        case UPDATE_EXPERIENCE: {
            return {
                ...state,
                experiences: state.experiences.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        default:
            return state;
    }
};
