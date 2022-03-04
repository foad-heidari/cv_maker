import { Dispatch } from "redux";
import axios from "axios";
import { GET_PROFILE, SAVE_PROFILE, UPDATE_PROFILE } from "./actionTypes";
import { PROFILE_URL } from "../../utils/APIUrls";
import { ProfileType } from "../state/ProfileStates";

export type ProfileAction = { type: string; payload: { name: string, value: string } | any };


export const getProfile = (payload: ProfileAction) => ({
    type: GET_PROFILE,
    payload,
});

export const updateProfile = (data: { name: string, value: string }): ProfileAction => ({
    type: UPDATE_PROFILE,
    payload: data,
});


export const saveProfile = (payload: ProfileType) => {
    return async function saveProfileThunk(dispatch: Dispatch) {
        const res = await axios.put(`${PROFILE_URL}${payload.id}/`, payload);
        dispatch({
            type: SAVE_PROFILE,
            payload: res.data
        });
    };
};
