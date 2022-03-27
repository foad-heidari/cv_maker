import { Dispatch } from "redux";
import axios from "axios";
import { PROFILE_URL } from "../../../utils/APIUrls";
import { ProfileType } from "../../state/cv_states/ProfileStates";
import { GET_PROFILE, SAVE_PROFILE, UPDATE_PROFILE } from "../actionTypes";
import { getUserHeaderToken } from "../../../utils/sharedUserFunctions";

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
        const res = await axios.put(`${PROFILE_URL}${payload.id}/`, payload,getUserHeaderToken());
        dispatch({
            type: SAVE_PROFILE,
            payload: res.data
        });
    };
};
