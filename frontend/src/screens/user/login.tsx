import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import Copyright from "./components/Coppyright";
import { AppState } from "../../redux/Store";
import { userLogin, UserLoginType } from "../../redux/actions/user_actions/userActions";
import { addMessage } from "../../redux/actions/cv_actions/messageActions";
import { MessageType } from "../../redux/state/cv_states/messageState";


export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(
        (state: AppState) => state.user.user
    );

    const [data, setData] = React.useState<UserLoginType>({
        email: "",
        password: "",
    });
    const [fieldError, setFieldError] = React.useState<UserLoginType>({
        email: "",
        password: "",
    });


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const emailValid = validator.isEmail(data.email);
        if (!emailValid || !data.password) {
            return setFieldError({
                email: !emailValid ? "Please Enter a valid Email." : "",
                password: !data.password ? "This Field is required" : "",
            });
        }


        const res = await dispatch(userLogin({
            email: data.email,
            password: data.password,
        }));

        dispatch(addMessage({ ...res } as MessageType));
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFieldError({
            ...fieldError, [e.target.name]: ""
        });
        setData({
            ...data, [e.target.name]: e.target.value
        });
    };

    React.useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={Boolean(fieldError.email)}
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => onChangeHandler(e)}
                                helperText={fieldError.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={Boolean(fieldError.password)}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => onChangeHandler(e)}
                                helperText={fieldError.password}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Typography variant="body2">
                                <Link to="/signup">
                                    Don`t have an account? Sign Up
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}