import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/Store";

export default function ProfileBox() {
    const profile = useSelector(
        (state: AppState) => state.profile.profile
    );

    return (
        <Box
            sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "primary.main"
            }}
        >
            <Avatar
                alt="Foad Heidari"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 70, height: 70, mb: 1 }}
            />
            <Typography color="white" variant="h5" fontWeight={500}>{profile.full_name}</Typography>

            <Typography color={grey[200]} variant="caption" fontWeight={500}>{profile.subtitle}</Typography>
        </Box>

    );
}
