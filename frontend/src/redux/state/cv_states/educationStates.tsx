export interface EducationType {
    id: string;
    cv: string;
    name: string;
    startDate: string;
    endDate: string;
    company: string;
}

export interface EducationState {
    educations: EducationType[];
}

export const initialEducationState: EducationState = {
    educations: [],
};
