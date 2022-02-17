import { ADD_PROJECT, UPDATE_PROJECT } from "../actions/actionTypes";
import { ProjectAction } from "../actions/prjectsActions";
import { initialProjectState } from "../state/projectStates";


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
        case UPDATE_PROJECT: {
            return {
                ...state,
                projects: state.projects.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        default:
            return state;
    }
};
