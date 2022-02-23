export interface LanguageType {
    id: string;
    name: string;
    level: string;
}

export interface LanguageState {
    languages: LanguageType[];
}

export const initialLanguageState: LanguageState = {
    languages: [
        {
            id: "1",
            name: "English",
            level: "80",
        },
    ],
};
