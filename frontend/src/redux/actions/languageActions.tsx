import { Dispatch } from "redux";
import axios from "axios";
import { ADD_LANGUAGE, DELETE_LANGUAGE, GET_LANGUAGES, UPDATE_LANGUAGE } from "./actionTypes";
import { LanguageType } from "../state/languageState";
import { LANGUAGE_URL } from "../../utils/APIUrls";


export type LanguageAction = { type: string; payload: any };

export const addLanguage = (payload: { cv: string, order: number }) => {
    return async function addLanguageThunk(dispatch: Dispatch) {
        const res = await axios.post(LANGUAGE_URL, payload);
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
            await axios.put(`${LANGUAGE_URL}${payload.id}/`, payload);
        }
        dispatch({
            type: UPDATE_LANGUAGE,
            payload: payload
        });
    };
};

export const deleteLanguage = (id: string) => {
    return async function deleteLanguageThunk(dispatch: Dispatch) {
        await axios.delete(LANGUAGE_URL + id);
        dispatch({
            type: DELETE_LANGUAGE,
            payload: id
        });
    };
};
