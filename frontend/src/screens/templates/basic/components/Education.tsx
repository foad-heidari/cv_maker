import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


import { useSelector } from "react-redux";
import { EducationType } from "../../../../redux/state/cv_states/educationStates";
import { AppState } from "../../../../redux/Store";

export default function Education() {
    const educations = useSelector(
        (state: AppState) => state.educations.educations
    );

    if (educations.length < 1) return null;

    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <Typography fontWeight={600} textTransform="uppercase">Education</Typography>
            {educations.map((item: EducationType) => (
                <Box
                    key={item.id}
                    display="flex"
                    sx={{ flexDirection: "column", mt: 1 }}
                >
                    <Typography fontWeight={600} variant="body2">
                        {item.name}
                    </Typography>
                    <Typography color={grey[300]} variant="caption">{item.company}</Typography>
                    <Typography color={grey[300]} variant="caption"> {item.startDate} {item.endDate ? ` - ${item.endDate}` : ""}</Typography>
                </Box>
            ))}
        </Box>
    );
}
