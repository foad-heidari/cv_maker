import { Grid, LinearProgress } from "@mui/material";

interface Props {
    text: string;
    value: number;
}

export default function LinearProgressItem(props: Props) {
    const { value, text } = props;
    return (
        <Grid sx={{ mb: 1 }} alignItems="center" container spacing={1}>
            <Grid item xs={4}>
                {text}
            </Grid>
            <Grid item xs={8}>
                <LinearProgress sx={{ height: 7, borderRadius: 5, }} value={value} variant="determinate" />
            </Grid>
        </Grid>
    );
}
