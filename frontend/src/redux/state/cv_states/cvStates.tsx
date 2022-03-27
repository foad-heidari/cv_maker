export interface CVType {
    id: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface CVState {
    cvs: CVType[];
}

export const initialCVState: CVState = {
    cvs: [
    ],
};
