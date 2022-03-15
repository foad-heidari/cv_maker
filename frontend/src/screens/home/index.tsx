import { Container, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import TemplateCard from "./componets/TemplateCard";
import { getCVs } from "../../redux/actions/cv_actions/cvActions";


export default function Home() {


    // useEffect(() => {
    //     getCVs();
    // }, []);
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
