import { LanguageAction } from "../actions/languageActions";
import { ADD_LANGUAGE, initialLanguageState, LanguageState, UPDATE_LANGUAGE } from "../state/languageState";


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
        case UPDATE_LANGUAGE: {
            const index = state.languages.findIndex(item => item.id === action.payload.id);
            const newArray = [...state.languages];
            newArray[index] = action.payload;

            return {
                ...state,
                languages: newArray
            };
        }
        default:
            return state;
    }
};
