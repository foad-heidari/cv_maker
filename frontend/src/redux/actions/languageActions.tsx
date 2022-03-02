import { ADD_LANGUAGE, GET_LANGUAGE, UPDATE_LANGUAGE } from "./actionTypes";
import { LanguageType } from "../state/languageState";


export type LanguageAction = { type: string; payload: any };

export const addLanguage = (language: LanguageType): LanguageAction => ({
    type: ADD_LANGUAGE,
    payload: language,
});

export const getLanguage = (language: LanguageType): LanguageAction => ({
    type: GET_LANGUAGE,
    payload: language,
});


export const updateLanguage = (language: LanguageType): LanguageAction => ({
    type: UPDATE_LANGUAGE,
    payload: language,
});

