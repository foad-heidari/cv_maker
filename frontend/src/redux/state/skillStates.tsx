export interface SkillType {
    id: string;
    name: string;
    level: string;
}

export interface SkillState {
    skills: SkillType[];
}

export const initialSkillState: SkillState = {
    skills: [
        {
            id: "1",
            name: "Javascript",
            level: "100",
        },
    ],
};
