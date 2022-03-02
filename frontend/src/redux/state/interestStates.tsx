export interface InterestType { id: string; cv: string; name: string }

export interface InterestsState {
    interests: InterestType[];
}


export const initialInterestsState: InterestsState = {
    interests: [
    ],
};
