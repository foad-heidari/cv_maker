export const UPDATE_PROFILE = "UPDATE_PROFILE";


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
        "subtitle": "Software Engineer",
        "address": "Netherlands",
        "email_address": "foad.heidari.1377@gmail.com",
        "phone_number": "0617777777",
        "website": "onlinenot.org",
        "linkedin": "linkedin",
        "github": "github",
        "twitter": "twitter",
        "career_profile": "something about myself"
    },
};
