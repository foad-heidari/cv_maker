import { Grid, Paper, } from "@mui/material";
import CareerProfile from "./components/CareerProfile";
import ProfileBox from "./components/ProfileBox";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import SocialAndContact from "./components/SocialAndContact";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education";

export default function BasicCVTemplate() {
    return (
        <Paper sx={{ margin: "auto", flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sx={{ p: 5 }} xs={8}>
                    <CareerProfile />
                    <Experiences />
                    <Projects />
                    <Skills />
                </Grid>
                <Grid xs={4} sx={{ bgcolor: "info.main" }}>
                    <ProfileBox />
                    <SocialAndContact />
                    <Education />
                    <Languages />
                    <Interests />
                </Grid>

            </Grid>
        </Paper>
    );
}
