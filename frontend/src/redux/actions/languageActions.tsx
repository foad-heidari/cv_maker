import { ADD_LANGUAGE, LanguageType, UPDATE_LANGUAGE } from "../state/languageState";


export type LanguageAction = { type: string; payload: LanguageType };

export const addLanguage = (language: LanguageType): LanguageAction => ({
    type: ADD_LANGUAGE,
    payload: language,
});

export const updateLanguage = (language: LanguageType): LanguageAction => ({
    type: UPDATE_LANGUAGE,
    payload: language,
});

