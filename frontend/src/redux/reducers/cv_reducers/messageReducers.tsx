import { ADD_MESSAGE, DELETE_MESSAGE } from "../../actions/actionTypes";
import { MessageAction } from "../../actions/cv_actions/messageActions";
import { initialMessageState } from "../../state/cv_states/messageState";

export const messageReducer = (
    state = initialMessageState,
    action: MessageAction
) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                message: action.payload
            };
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                message: null
            };
        }
        default:
            return state;
    }
};
