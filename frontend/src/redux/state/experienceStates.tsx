export interface ExperienceType {
    id: number;
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
    experiences: [
        {
            id: 1,
            name: "Full stack developer",
            startDate: "May 2019",
            endDate: "May 2020",
            company: "Pescehck",
            location: "Enschede",
            description: "some long text",
        }
    ],
};
