import {
    Avatar,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../redux/actions/profileActions";
import { ProfileType } from "../../../redux/state/ProfileStates";
import { AppState } from "../../../redux/Store";

const profileFields = [
    "full_name",
    "subtitle",
    "address",
    "email_address",
    "phone_number",
    "website",
    "linkedin",
    "github",
    "twitter",
];

export default function SkillsCard() {
    const profile = useSelector(
        (state: AppState) => state.profile.profile
    );

    const dispatch = useDispatch();

    const updateProfileHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(updateProfile({
            name: e.target.name,
            value: e.target.value
        }));
    };

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
            {profileFields.map((item) => (
                <TextField
                    onChange={(e) => updateProfileHandler(e)}
                    fullWidth
                    sx={{ mb: 2 }}
                    key={item}
                    name={item}
                    value={profile[item as keyof ProfileType]}
                    label={item}
                    variant="standard"
                />
            ))}
            <TextField
                fullWidth
                name="career_profile"
                multiline
                rows={4}
                label="Career profile"
                variant="standard"
                value={profile.career_profile}
                onChange={(e) => updateProfileHandler(e)}
            />
        </Paper>
    );
}
