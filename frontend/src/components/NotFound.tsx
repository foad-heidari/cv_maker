import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 2 }}>
                    <DoNotDisturbAltIcon />
                </Avatar>
                <Typography component="h1" variant="h3">
                    404 - Not Found!
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>

                    <Button
                        component={Link}
                        to="/"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Go back to home
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}