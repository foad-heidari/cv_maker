import {
    USER_AUTH_FAILURE,
    USER_AUTH_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS
} from "../../actions/actionTypes";
import { UserAction } from "../../actions/user_actions/userActions";
import { initialUserState } from "../../state/user_states/userStates";


export const UserReducer = (
    state = initialUserState,
    action: UserAction
) => {

    switch (action.type) {
        case USER_LOGIN_SUCCESS:
        case USER_AUTH_SUCCESS:
        case USER_REGISTER_SUCCESS: {
            return {
                ...state,
                user: action.payload
            };
        }
        case USER_LOGIN_FAILURE:
        case USER_AUTH_FAILURE:
        case USER_REGISTER_FAILURE: {
            console.log("first");
            return {
                ...state,
                user: null
            };
        }
        default:
            return state;
    }
};
