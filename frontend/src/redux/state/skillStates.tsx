export interface SkillType {
    id: string;
    cv: string;
    name: string;
    level: string;
}

export interface SkillState {
    skills: SkillType[];
}

export const initialSkillState: SkillState = {
    skills: [
    ],
};
