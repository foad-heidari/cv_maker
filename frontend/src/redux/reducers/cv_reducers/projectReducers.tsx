import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from "../../actions/actionTypes";
import { ProjectAction } from "../../actions/cv_actions/prjectsActions";
import { initialProjectState } from "../../state/cv_states/projectStates";


export const projectsReducer = (
    state = initialProjectState,
    action: ProjectAction
) => {
    switch (action.type) {
        case ADD_PROJECT: {
            return {
                ...state,
                projects: [...state.projects, action.payload]
            };
        }
        case GET_PROJECTS: {
            return {
                ...state,
                projects: action.payload
            };
        }
        case UPDATE_PROJECT: {
            return {
                ...state,
                projects: state.projects.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        case DELETE_PROJECT: {
            return {
                ...state,
                projects: state.projects.filter(item => item.id !== action.payload)
            };
        }
        default:
            return state;
    }
};
