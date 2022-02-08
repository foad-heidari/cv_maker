import {
    Avatar,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from "@mui/material";

const profileFields = [
    "First Name",
    "Last Name",
    "Subtitle",
    "Address",
    "Phone Number",
    "Website",
    "Email Address"
];

export default function SkillsCard() {
    return (

        <Paper sx={{ p: 2 }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <label htmlFor="icon-button-file">
                    <input hidden accept="image/*" id="icon-button-file" type="file" />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <Avatar
                            src="/images/example.jpg"
                            style={{
                                margin: "10px",
                                width: "60px",
                                height: "60px",
                            }}
                        />

                    </IconButton>
                    <Typography sx={{ width: "100%", textAlign: "center" }} variant="caption" display="block" gutterBottom>
                        Selct the Photo
                    </Typography>

                </label>

            </Grid>

            {profileFields.map(item => (
                <TextField sx={{ mb: 2 }} key={item} id="standard-basic" label={item} variant="standard" />
            ))}
        </Paper>
    );
}
