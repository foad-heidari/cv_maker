
import { ExperienceAction } from "../actions/experienceActions";
import { ADD_EXPERIENCE, initialExperienceState, UPDATE_EXPERIENCE } from "../state/experienceStates";


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
            const index = state.experiences.findIndex(item => item.id === action.payload.id);
            const newArray = [...state.experiences];
            newArray[index] = action.payload;

            return {
                ...state,
                experiences: newArray
            };
        }
        default:
            return state;
    }
};
