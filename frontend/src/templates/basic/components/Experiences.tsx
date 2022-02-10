import { Box, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { grey } from "@mui/material/colors";
import SectionHeader from "./SectionHeader";

export default function Experiences() {
    return (
        <Box sx={{ mb: 3 }}>
            <SectionHeader icon={<WorkIcon fontSize="small" />} title="Experiences" />
            <Box sx={{ mb: 2, lineHeight: 1 }}>
                <Box>
                    <Box
                        display="flex"
                        sx={{ justifyContent: "space-between" }}
                    >
                        <Typography fontWeight={500} variant="body2">
                            Software Engineer
                        </Typography>
                        <Typography color={grey[600]} variant="caption">
                            July 2018 - July 2020
                        </Typography>
                    </Box>
                    <Typography color={grey[600]} variant="caption">- Pescheck, Enschede</Typography>
                </Box>
                <Typography variant="caption">Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</Typography>
            </Box>
        </Box>
    );
}
