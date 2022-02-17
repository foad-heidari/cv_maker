export interface EducationType {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    company: string;
}

export interface EducationState {
    educations: EducationType[];
}

export const initialEducationState: EducationState = {
    educations: [
        {
            id: 1,
            name: "Accounting",
            startDate: "May 2019",
            endDate: "May 2020",
            company: "Bu ali sina",
        },
    ],
};
