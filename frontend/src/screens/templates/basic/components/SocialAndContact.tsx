import { Box } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useSelector } from "react-redux";
import TextWithIcon from "./TextWithIcon";
import { AppState } from "../../../../redux/Store";


export default function SocialAndContact() {
    const profile = useSelector(
        (state: AppState) => state.profile.profile
    );
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <TextWithIcon text={profile.email_address} icon={<MailIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text={profile.phone_number} icon={<PhoneEnabledIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text={profile.website} icon={<LanguageIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text={profile.linkedin} icon={<LinkedInIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text={profile.github} icon={<GitHubIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text={profile.twitter} icon={<TwitterIcon sx={{ fontSize: 15, mr: 1 }} />} />
        </Box>

    );
}
