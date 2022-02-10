import {
    Avatar,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from "@mui/material";

const profileFields = [
    "Full Name",
    "Subtitle",
    "Address",
    "Email Address",
    "Phone Number",
    "Website",
    "Linkedin",
    "Github",
    "Twitter"
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
                        Select a Photo
                    </Typography>

                </label>

            </Grid>

            {profileFields.map(item => (
                <TextField fullWidth sx={{ mb: 2 }} key={item} id="standard-basic" label={item} variant="standard" />
            ))}
            <TextField
                fullWidth
                id="standard-multiline-static"
                multiline
                rows={4}
                label="Career profile"
                variant="standard"
            />
        </Paper>
    );
}
