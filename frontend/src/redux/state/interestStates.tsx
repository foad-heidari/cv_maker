export interface InterestType { id: string; cv: string; name: string }

export interface InterestsState {
    interests: InterestType[];
}


export const initialInterestsState: InterestsState = {
    interests: [

        { id: "2", cv: "6c70905c-8f02-451b-94ea-577dfae0dc46", name: "Swimming22" },
    ],
};
