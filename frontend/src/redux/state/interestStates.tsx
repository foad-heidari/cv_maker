export const ADD_INTERST = "ADD_INTERST";
export const UPDATE_INTERST = "UPDATE_INTERST";


export interface InterestType { id: number, name: string }

export interface InterestsState {
    interests: InterestType[];
}


export const initialInterestsState: InterestsState = {
    interests: [
        { id: 1, name: "Guitar" },
        { id: 2, name: "Swimming" },
    ],
};
