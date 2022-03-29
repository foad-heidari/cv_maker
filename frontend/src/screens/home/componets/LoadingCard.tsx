import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";

export default function LoadingCard(): React.ReactElement {
    return (
        <Grid item xs={12} md={4}>
            <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
            <Typography variant="h5"><Skeleton /></Typography>
            <Skeleton width="30%" />
        </Grid>
    );
}
