import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "../../actions/actionTypes";
import { UserAction } from "../../actions/user_actions/userActions";
import { initialUserState } from "../../state/user_states/userStates";


export const UserReducer = (
    state = initialUserState,
    action: UserAction
) => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }
        case USER_LOGIN_FAILURE: {
            return {
                ...state,
                user: null
            };
        }
        default:
            return state;
    }
};
