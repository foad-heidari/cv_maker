import { GET_PROFILE, SAVE_PROFILE, UPDATE_PROFILE } from "../../actions/actionTypes";
import { ProfileAction } from "../../actions/cv_actions/profileActions";
import { initialProfileState, ProfileState } from "../../state/cv_states/ProfileStates";


export const profileReducer = (
    state: ProfileState = initialProfileState,
    action: ProfileAction
) => {
    switch (action.type) {
        case GET_PROFILE: {
            return {
                ...state,
                profile: action.payload
            };
        }
        case UPDATE_PROFILE: {
            return {
                ...state,
                profile:
                {
                    ...state.profile, [action.payload.name]: action.payload.value
                }
            };
        }
        case SAVE_PROFILE: {
            return {
                ...state,
                profile: action.payload
            };
        }
        default:
            return state;
    }
};
