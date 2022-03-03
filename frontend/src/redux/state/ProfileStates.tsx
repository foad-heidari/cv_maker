export interface ProfileType {
    full_name: string;
    subtitle: string;
    address: string;
    email_address: string;
    phone_number: string;
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
    career_profile: string;
}
export interface ProfileState {
    profile: ProfileType;
}

export const initialProfileState: ProfileState = {
    profile: {
        "full_name": "",
        "subtitle": "",
        "address": "",
        "email_address": "",
        "phone_number": "",
        "website": "",
        "linkedin": "",
        "github": "",
        "twitter": "",
        "career_profile": ""
    },
};
