export interface ExperienceType {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    company: string;
    location: string;
    description: string;
}

export interface ExperienceState {
    experiences: ExperienceType[];
}

export const initialExperienceState: ExperienceState = {
    experiences: [],
};
