import { ADD_SKILL, UPDATE_SKILL } from "../actions/actionTypes";
import { SkillAction } from "../actions/skillActions";
import { initialSkillState } from "../state/skillStates";

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
            return {
                ...state,
                skills: state.skills.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        default:
            return state;
    }
};
