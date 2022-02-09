import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";


export default function Languages() {
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <Typography fontWeight={600} textTransform="uppercase">Languages</Typography>
            <Box>
                <Typography variant="caption">
                    English
                </Typography>
                <Typography color={grey[300]} variant="caption"> (80%)</Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    Dutch
                </Typography>
                <Typography color={grey[300]} variant="caption"> (40%)</Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    Persian
                </Typography>
                <Typography color={grey[300]} variant="caption"> (100%)</Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    Kurdish
                </Typography>
                <Typography color={grey[300]} variant="caption"> (100%)</Typography>
            </Box>
        </Box>

    );
}
