export interface SkillType {
    id: number;
    name: string;
    level: string;
}

export interface SkillState {
    skills: SkillType[];
}

export const initialSkillState: SkillState = {
    skills: [
        {
            id: 1,
            name: "Javascript",
            level: "100",
        },
        {
            id: 2,
            name: "Python",
            level: "80",
        },
    ],
};
