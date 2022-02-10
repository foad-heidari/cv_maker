import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


export default function Education() {
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <Typography fontWeight={600} textTransform="uppercase">Education</Typography>
            <Box
                display="flex"
                sx={{ flexDirection: "column", mt: 1 }}
            >
                <Typography fontWeight={600} variant="body2">
                    MSc in Computer Science
                </Typography>
                <Typography color={grey[300]} variant="caption"> University of London</Typography>
                <Typography color={grey[300]} variant="caption"> 2016 - 2018</Typography>
            </Box>

            <Box
                display="flex"
                sx={{ flexDirection: "column", mt: 1, lineHeight: 1 }}
            >
                <Typography fontWeight={600} variant="body2">
                    MSc in Computer Science
                </Typography>
                <Typography color={grey[300]} variant="caption"> University of London</Typography>
                <Typography color={grey[300]} variant="caption"> 2016 - 2018</Typography>
            </Box>
        </Box>
    );
}
