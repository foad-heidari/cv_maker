import { Dispatch } from "redux";
import axios from "axios";
import { ADD_SKILL, DELETE_SKILL, GET_SKILLS, UPDATE_SKILL } from "./actionTypes";
import { SkillType } from "../state/skillStates";
import { SKILLS_URL } from "../../utils/APIUrls";

export type SkillAction = { type: string; payload: any };


export const addSkill = (payload: { cv: string, order: number }) => {
    return async function addSkillThunk(dispatch: Dispatch) {
        const res = await axios.post(SKILLS_URL, payload);
        dispatch({
            type: ADD_SKILL,
            payload: res.data
        });
    };
};

export const getSkills = (payload: SkillType): SkillAction => ({
    type: GET_SKILLS,
    payload: payload,
});


export const updateSkill = (payload: SkillType, save = false) => {
    return async function updateSkillThunk(dispatch: Dispatch) {
        if (save) {
            await axios.put(`${SKILLS_URL}${payload.id}/`, payload);
        }

        dispatch({
            type: UPDATE_SKILL,
            payload: payload
        });
    };
};

export const deleteSkill = (id: string) => {
    return async function deleteSkillThunk(dispatch: Dispatch) {
        await axios.delete(SKILLS_URL + id);
        dispatch({
            type: DELETE_SKILL,
            payload: id
        });
    };
};
