export const ADD_LANGUAGE = "ADD_LANGUAGE";
export const UPDATE_LANGUAGE = "UPDATE_LANGUAGE";


export interface LanguageType {
    id: number;
    name: string;
    level: string;
}

export interface LanguageState {
    languages: LanguageType[];
}

export const initialLanguageState: LanguageState = {
    languages: [
        {
            id: 1,
            name: "English",
            level: "80",
        },
        {
            id: 2,
            name: "Dutch",
            level: "60",
        }
    ],
};
