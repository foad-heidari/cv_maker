import { SkillAction } from "../actions/skillActions";
import { ADD_SKILL, initialSkillState, UPDATE_SKILL } from "../state/skillStates";

export const skillsReducer = (
    state = initialSkillState,
    action: SkillAction
) => {
    switch (action.type) {
        case ADD_SKILL: {
            return {
                ...state,
                skills: [...state.skills, action.payload]
            };
        }
        case UPDATE_SKILL: {
            const index = state.skills.findIndex(item => item.id === action.payload.id);
            const newArray = [...state.skills];
            newArray[index] = action.payload;

            return {
                ...state,
                skills: newArray
            };
        }
        default:
            return state;
    }
};
