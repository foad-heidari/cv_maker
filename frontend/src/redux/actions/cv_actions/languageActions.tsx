import { Dispatch } from "redux";
import axios from "axios";
import { LANGUAGES_URL } from "../../../utils/APIUrls";
import { LanguageType } from "../../state/cv_states/languageState";
import { ADD_LANGUAGE, DELETE_LANGUAGE, GET_LANGUAGES, UPDATE_LANGUAGE } from "../actionTypes";


export type LanguageAction = { type: string; payload: any };

export const addLanguage = (payload: { cv: string, order: number }) => {
    return async function addLanguageThunk(dispatch: Dispatch) {
        const res = await axios.post(LANGUAGES_URL, payload);
        dispatch({
            type: ADD_LANGUAGE,
            payload: res.data
        });
    };
};

export const getLanguage = (language: LanguageType): LanguageAction => ({
    type: GET_LANGUAGES,
    payload: language,
});

export const updateLanguage = (payload: LanguageType, save = false) => {
    return async function updateLanguageThunk(dispatch: Dispatch) {
        if (save) {
            await axios.put(`${LANGUAGES_URL}${payload.id}/`, payload);
        }
        dispatch({
            type: UPDATE_LANGUAGE,
            payload: payload
        });
    };
};

export const deleteLanguage = (id: string) => {
    return async function deleteLanguageThunk(dispatch: Dispatch) {
        await axios.delete(LANGUAGES_URL + id);
        dispatch({
            type: DELETE_LANGUAGE,
            payload: id
        });
    };
};
