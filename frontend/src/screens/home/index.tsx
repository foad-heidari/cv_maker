import { Container, Divider, Typography } from "@mui/material";

import TemplateCard from "./componets/TemplateCard";

export default function Home() {
    return (
        <>
            <Container sx={{ my: 4 }} maxWidth="lg" >
                <Typography variant="h6" component="h2">
                    Your CV Templates
                </Typography>
                <Divider sx={{ mt: 1, mb: 3 }} />
                <TemplateCard />
            </Container>

            <Container sx={{ my: 4 }} maxWidth="lg" >
                <Typography variant="h6" component="h2">
                    Create New CV
                </Typography>
                <Divider sx={{ mt: 1, mb: 3 }} />
                <TemplateCard />
            </Container>
        </>
    );
}
