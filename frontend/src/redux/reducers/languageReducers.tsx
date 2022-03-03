import { ADD_LANGUAGE, GET_LANGUAGES, UPDATE_LANGUAGE } from "../actions/actionTypes";
import { LanguageAction } from "../actions/languageActions";
import { initialLanguageState, LanguageState } from "../state/languageState";


export const languagesReducer = (
    state: LanguageState = initialLanguageState,
    action: LanguageAction
) => {
    switch (action.type) {
        case ADD_LANGUAGE: {
            return {
                ...state,
                languages: [...state.languages, action.payload]
            };
        }
        case GET_LANGUAGES: {
            return {
                ...state,
                languages: action.payload
            };
        }
        case UPDATE_LANGUAGE: {
            return {
                ...state,
                languages: state.languages.map(item => item.id === action.payload.id
                    ? action.payload : item)
            };
        }
        default:
            return state;
    }
};
