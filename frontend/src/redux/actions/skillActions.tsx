import { ADD_SKILL, UPDATE_SKILL } from "./actionTypes";
import { SkillType } from "../state/skillStates";

export type SkillAction = { type: string; payload: SkillType };

export const addSkill = (skill: SkillType): SkillAction => {
    return {
        type: ADD_SKILL,
        payload: skill,
    };
};

export const updateSkill = (skill: SkillType): SkillAction => ({
    type: UPDATE_SKILL,
    payload: skill,
});
