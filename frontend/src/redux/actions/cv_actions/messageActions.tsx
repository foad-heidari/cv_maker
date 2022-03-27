import { MessageType } from "../../state/cv_states/messageState";
import { ADD_MESSAGE, DELETE_MESSAGE } from "../actionTypes";


export type MessageAction = { type: string; payload: MessageType };

export const addMessage = (payload: MessageType): MessageAction => ({
    type: ADD_MESSAGE,
    payload: payload,
});

export const deleteMessage = (): { type: string } => ({
    type: DELETE_MESSAGE
});
