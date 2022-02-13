import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { AppState } from "../../../redux/Store";

export default function CareerProfile() {
    const profile = useSelector(
        (state: AppState) => state.profile.profile
    );
    if (!profile.career_profile) return null;
    return (
        <Box sx={{ mb: 4 }}>
            <SectionHeader icon={<PersonIcon fontSize="small" />} title="Career Profile" />
            <Typography variant="body2">
                {profile.career_profile}
            </Typography>
        </Box>
    );
}
