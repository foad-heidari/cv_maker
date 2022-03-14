export interface UserType {
    id: string;
    email: string;
    token: null
    first_name?: string;
    last_name?: string;
    is_active?: boolean;
    created?: Date;
    updated?: Date;
}

export interface UserState {
    user: UserType | null;
}

export const initialUserState: UserState = {
    user: null,
};
