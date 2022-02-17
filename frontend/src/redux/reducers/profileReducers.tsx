import { UPDATE_PROFILE } from "../actions/actionTypes";
import { ProfileAction } from "../actions/profileActions";
import { initialProfileState, ProfileState } from "../state/ProfileStates";


export const profileReducer = (
    state: ProfileState = initialProfileState,
    action: ProfileAction
) => {
    switch (action.type) {
        case UPDATE_PROFILE: {
            return {
                ...state,
                profile:
                {
                    ...state.profile, [action.payload.name]: action.payload.value
                }
            };
        }
        default:
            return state;
    }
};
