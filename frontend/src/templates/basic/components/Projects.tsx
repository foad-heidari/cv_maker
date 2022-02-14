import { Box, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SectionHeader from "./SectionHeader";


export default function Projects() {
    return (
        <Box sx={{ mb: 3 }}>
            <SectionHeader icon={<AccountTreeIcon fontSize="small" />} title="Projects" />
            <Box sx={{ mb: 2, lineHeight: 1 }}>
                <Typography color="primary.main" variant="body2">
                    Onlinenot.org
                </Typography>
                <Typography sx={{ lineHeight: 1, whiteSpace: "pre-line" }} variant="caption"> Free Guiat Tab and chord website base on (ReacJS, NodeJs, MongoDB)</Typography>
            </Box>

            <Box sx={{ mb: 2, lineHeight: 1 }}>
                <Typography color="primary.main" variant="body2">
                    DjBooking
                </Typography>
                <Typography sx={{ lineHeight: 1, whiteSpace: "pre-line" }} variant="caption">Free and open source booking package for django</Typography>
            </Box>

        </Box>
    );
}
