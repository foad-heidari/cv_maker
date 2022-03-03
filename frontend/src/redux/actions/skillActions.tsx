import { ADD_SKILL, GET_SKILLS, UPDATE_SKILL } from "./actionTypes";
import { SkillType } from "../state/skillStates";

export type SkillAction = { type: string; payload: any };


export const addSkill = (payload: SkillType): SkillAction => {
    return {
        type: ADD_SKILL,
        payload: payload,
    };
};

export const getSkills = (payload: SkillType): SkillAction => ({
    type: GET_SKILLS,
    payload: payload,
});

export const updateSkill = (payload: SkillType): SkillAction => ({
    type: UPDATE_SKILL,
    payload: payload,
});
