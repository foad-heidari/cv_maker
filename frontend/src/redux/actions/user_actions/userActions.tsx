import { Dispatch } from "redux";
import axios, { AxiosError } from "axios";
import { USER_LOGIN_URL } from "../../../utils/APIUrls";
import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "../actionTypes";
import { UserType } from "../../state/user_states/userStates";



export type UserAction = { type: string; payload: UserType };

export const userLogin = (payload: { email: string, password: string }) => {
    return async function addLanguageThunk(dispatch: Dispatch) {
        try {
            const res = await axios.post(USER_LOGIN_URL, payload);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            });
        } catch (err: unknown) {
            // const error = err as AxiosError;
            dispatch({
                type: USER_LOGIN_FAILURE
            });
        }

    };
};

// export const getLanguage = (language: LanguageType): LanguageAction => ({
//     type: GET_LANGUAGES,
//     payload: language,
// });

// export const updateLanguage = (payload: LanguageType, save = false) => {
//     return async function updateLanguageThunk(dispatch: Dispatch) {
//         if (save) {
//             await axios.put(`${LANGUAGES_URL}${payload.id}/`, payload);
//         }
//         dispatch({
//             type: UPDATE_LANGUAGE,
//             payload: payload
//         });
//     };
// };

// export const deleteLanguage = (id: string) => {
//     return async function deleteLanguageThunk(dispatch: Dispatch) {
//         await axios.delete(LANGUAGES_URL + id);
//         dispatch({
//             type: DELETE_LANGUAGE,
//             payload: id
//         });
//     };
// };
