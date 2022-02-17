import { ProjectAction } from "../actions/prjectsActions";
import { ADD_PROJECT, initialProjectState, UPDATE_PROJECT } from "../state/projectStates";


export const ProjectsReducer = (
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
            const index = state.projects.findIndex(project => project.id === action.payload.id);
            const newArray = [...state.projects];
            newArray[index] = action.payload;

            return {
                ...state,
                projects: newArray
            };
        }
        default:
            return state;
    }
};
