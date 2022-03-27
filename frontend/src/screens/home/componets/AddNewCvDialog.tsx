import Card from "@mui/material/Card";
import { Button, CardActionArea, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCV } from "../../../redux/actions/cv_actions/cvActions";

interface propsType {
    open: boolean;
    handleClose: () => void;
}

export default function AddNewCvDialog(props: propsType) {
    const { open, handleClose } = props;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNewCV = async () => {
        setLoading(true);
        const res: any = await dispatch(addCV());
        if (res.result) {
            handleClose();
            setLoading(false);
            navigate(`/editor/${res.result}`); 
        }
        setLoading(false);

    };
    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
            <DialogTitle>Add new CV</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please Select one template
                </DialogContentText>
                <Grid container spacing={2}>
                    {loading ?
                        <CircularProgress disableShrink />
                        :
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardActionArea onClick={addNewCV}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/templates/basic/img/screenshot.jpg"
                                        alt="basic template"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Basic Template
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}
