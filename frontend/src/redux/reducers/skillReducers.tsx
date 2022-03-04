import { ADD_SKILL, DELETE_SKILL, GET_SKILLS, UPDATE_SKILL } from "../actions/actionTypes";
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
        case GET_SKILLS: {
            return {
                ...state,
                skills: action.payload
            };
        }
        case UPDATE_SKILL: {
            return {
                ...state,
                skills: state.skills.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        case DELETE_SKILL: {
            return {
                ...state,
                skills: state.skills.filter(item => item.id !== action.payload)
            };
        }
        default:
            return state;
    }
};
