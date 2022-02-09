import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SectionHeader from "./SectionHeader";

export default function CareerProfile() {
    return (
        <Box sx={{ mb: 4 }}>
            <SectionHeader icon={<PersonIcon fontSize="small" />} title="Career Profile" />
            <Typography variant="body2">
                Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
            </Typography>
        </Box>
    );
}
