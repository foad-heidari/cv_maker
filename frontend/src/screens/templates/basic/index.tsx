import { Interests } from "@mui/icons-material";
import { Grid, Paper } from "@mui/material";
import CareerProfile from "./components/CareerProfile";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Languages from "./components/Languages";
import ProfileBox from "./components/ProfileBox";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialAndContact from "./components/SocialAndContact";


export default function BasicCVTemplate() {
    return (
        <Paper sx={{ margin: "auto", flexGrow: 1 }}>
            <Grid container spacing={0}>
                <Grid item xs={8} sx={{ p: 3 }}>
                    <CareerProfile />
                    <Experiences />
                    <Projects />
                    <Skills />
                </Grid>
                <Grid item xs={4} sx={{ bgcolor: "info.main" }}>
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
