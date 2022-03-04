export interface CVType {
    id: string;
    status: string;
}

export interface CVState {
    cvs: CVType[];
}

export const initialCVState: CVState = {
    cvs: [
        {
            id: "6c70905c-8f02-451b-94ea-577dfae0dc46",
            status: "ACTIVE"
        },
    ],
};
