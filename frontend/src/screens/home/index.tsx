import { Container, Divider, Typography } from "@mui/material";

import TemplateCard from "./componets/TemplateCard";

export default function Home() {
    return (
        <Container sx={{ my: 2 }} maxWidth="lg" >
            <Typography variant="h6" component="h2">
                Please select one of the CV Tamplates
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TemplateCard />
        </Container>
    );
}
