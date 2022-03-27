import { Dispatch } from "redux";
import axios from "axios";
import { USER_AUTH_URL, USER_LOGIN_URL, USER_SIGNUP_URL } from "../../../utils/APIUrls";
import {
    USER_AUTH_FAILURE,
    USER_AUTH_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS
} from "../actionTypes";
import { UserType } from "../../state/user_states/userStates";


export type UserAction = { type: string; payload: UserType };

export type UserLoginType = { email: string, password: string }

export const userLogin = (payload: UserLoginType) => {
    return async function userLoginThunk(dispatch: Dispatch) {
        try {
            const res = await axios.post(USER_LOGIN_URL, payload);
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            });
        } catch (err: unknown) {
            localStorage.removeItem("token");
            // const error = err as AxiosError;
            dispatch({
                type: USER_LOGIN_FAILURE
            });
        }

    };
};

export type UserSignupType = { email: string, password: string, password2: string }

export const userSignup = (payload: UserSignupType) => {
    return async function userSignupThunk(dispatch: Dispatch) {
        try {
            const res = await axios.post(USER_SIGNUP_URL, payload);
            localStorage.setItem("token", res.data.token);
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: res.data
            });
        } catch (err: unknown) {
            localStorage.removeItem("token");
            // const error = err as AxiosError;
            dispatch({
                type: USER_REGISTER_FAILURE
            });
        }

    };
};




export const userAuth = (payload: { token: string }) => {
    return async function userAuthThunk(dispatch: Dispatch) {
        try {
            const headers = {
                headers: { "Authorization": "Token " + payload.token }
            };
            const res = await axios.post(USER_AUTH_URL, {}, headers);
            dispatch({
                type: USER_AUTH_SUCCESS,
                payload: res.data
            });
        } catch (err: unknown) {
            localStorage.removeItem("token");
            // const error = err as AxiosError;
            dispatch({
                type: USER_AUTH_FAILURE
            });
        }

    };
};
