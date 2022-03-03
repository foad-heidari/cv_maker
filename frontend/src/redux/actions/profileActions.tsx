import { GET_PROFILE, UPDATE_PROFILE } from "./actionTypes";

export type ProfileAction = { type: string; payload: { name: string, value: string } | any };


export const getProfile = (payload: ProfileAction) => ({
    type: GET_PROFILE,
    payload,
});

export const updateProfile = (data: { name: string, value: string }): ProfileAction => ({
    type: UPDATE_PROFILE,
    payload: data,
});
