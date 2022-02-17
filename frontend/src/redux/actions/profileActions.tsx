import { UPDATE_PROFILE } from "./actionTypes";

export type ProfileAction = { type: string; payload: { name: string, value: string } };

export const updateProfile = (data: { name: string, value: string }): ProfileAction => ({
    type: UPDATE_PROFILE,
    payload: data,
});
