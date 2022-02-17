import { Box, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { AppState } from "../../../../redux/Store";

export default function Experiences() {
    const experiences = useSelector(
        (state: AppState) => state.experiences.experiences
    );

    if (experiences.length < 1) return null;

    return (
        <Box sx={{ mb: 3 }}>
            <SectionHeader icon={<WorkIcon fontSize="small" />} title="Experiences" />
            {experiences.map(item => {
                return <Box key={item.id} sx={{ mb: 2, lineHeight: 1 }}>
                    <Box>
                        <Box
                            display="flex"
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Typography fontWeight={500} variant="body2">
                                {item.name}
                            </Typography>
                            <Typography color={grey[600]} variant="caption">
                                {item.startDate} {item.endDate && ` - ${item.endDate}`}
                            </Typography>
                        </Box>
                        <Typography color={grey[600]} variant="caption">{item.company} {item.location && `, ${item.location}`}</Typography>
                    </Box>
                    <Typography sx={{ whiteSpace: "pre-line" }} variant="caption">{item.description}</Typography>
                </Box>;
            })}

        </Box>
    );
}
