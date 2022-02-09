import { Box, Typography } from "@mui/material";


export default function Interests() {
    return (
        <Box
            color="white"
            sx={{
                p: 2,
            }}
        >
            <Typography fontWeight={600} textTransform="uppercase">Interests</Typography>
            <Box>
                <Typography variant="caption">
                    Music
                </Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    Swimming
                </Typography>
            </Box>
            <Box>
                <Typography variant="caption">
                    Movies
                </Typography>
            </Box>
        </Box>

    );
}
