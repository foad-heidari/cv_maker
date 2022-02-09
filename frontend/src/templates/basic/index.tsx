import { Grid, Paper, } from "@mui/material";
import CareerProfile from "./components/CareerProfile";
import ProfileBox from "./components/ProfileBox";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import SocialAndContact from "./components/SocialAndContact";
import Interests from "./components/Interests";
import Projects from "./components/Projects";

export default function BasicCVTemplate() {
    return (
        <Paper sx={{ margin: "auto", flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sx={{ p: 5 }} xs={8}>
                    <CareerProfile />
                    <Projects />
                    <Skills />
                </Grid>
                <Grid xs={4} sx={{ bgcolor: "info.main" }}>
                    <ProfileBox />
                    <SocialAndContact />
                    <Languages />
                    <Interests />
                </Grid>

            </Grid>
        </Paper>
    );
}
