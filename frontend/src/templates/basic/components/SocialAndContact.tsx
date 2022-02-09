import { Box } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextWithIcon from "./TextWithIcon";

export default function SocialAndContact() {
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <TextWithIcon text="foad.heidari.1377@gmail.com" icon={<MailIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text="0617568724" icon={<PhoneEnabledIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text="onlinenot.org" icon={<LanguageIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text="https://www.linkedin.com/in/foad-heidari-3566071ab/" icon={<LinkedInIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text="https://github.com/foad-heidari" icon={<GitHubIcon sx={{ fontSize: 15, mr: 1 }} />} />
            <TextWithIcon text="@foad-heidari" icon={<TwitterIcon sx={{ fontSize: 15, mr: 1 }} />} />
        </Box>

    );
}
