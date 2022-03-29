import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TemplateCard from "./componets/TemplateCard";
import AddNewCvDialog from "./componets/AddNewCvDialog";
import LoadingCard from "./componets/LoadingCard";
import { getCVs } from "../../redux/actions/cv_actions/cvActions";
import { AppState } from "../../redux/Store";
import { CVType } from "../../redux/state/cv_states/cvStates";



export default function Home() {
    const cvs = useSelector(
        (state: AppState) => state.cv.cvs
    );
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCVs());
        setLoading(false);
    }, []);


    return (
        <>
            <AddNewCvDialog open={open} handleClose={() => setOpen(!open)} />
            <Container sx={{ my: 4 }} maxWidth="lg" >
                <Typography variant="h6" component="h2">
                    Your CVs
                </Typography>
                <Divider sx={{ mt: 1, mb: 3 }} />
                <Grid container spacing={2}>
                    {loading ?
                        <>
                            <LoadingCard />
                            <LoadingCard />
                            <LoadingCard />
                        </>
                        :
                        cvs.map((item: CVType) => (
                            <Grid key={item.id} item xs={12} md={4}>
                                <TemplateCard item={item} />
                            </Grid>
                        ))
                    }
                    {!loading &&
                        <Grid item
                            xs={12}
                            md={4}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button sx={{ p: 5 }} variant="outlined" onClick={() => setOpen(!open)}>
                                Add new cv
                            </Button>
                        </Grid>
                    }
                </Grid>

            </Container>

        </>
    );
}
