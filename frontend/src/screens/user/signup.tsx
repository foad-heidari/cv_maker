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
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useState } from "react";
import Copyright from "./components/Coppyright";
import { userSignup, UserSignupType } from "../../redux/actions/user_actions/userActions";
import { AppState } from "../../redux/Store";


export default function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [data, setData] = React.useState<UserSignupType>({
        email: "",
        password: "",
        password2: "",
    });
    const [fieldError, setFieldError] = React.useState<UserSignupType>({
        email: "",
        password: "",
        password2: "",
    });


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const emailValid = validator.isEmail(data.email);
        const passwordValid = validator.isLength(data.password, {
            min: 8
        });
        const password2Valid = data.password2 === data.password;
        if (!emailValid || !passwordValid || !password2Valid) {
            return setFieldError({
                email: !emailValid ? "Please Enter a valid Email." : "",
                password: !passwordValid ? "Password should have Length > 8" : "",
                password2: !password2Valid ? "Please Enter a same password" : "",
            });
        }

        dispatch(userSignup({
            email: data.email,
            password: data.password,
            password2: data.password2,
        }));

    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFieldError({
            ...fieldError, [e.target.name]: ""
        });
        setData({
            ...data, [e.target.name]: e.target.value
        });
    };

    const user = useSelector(
        (state: AppState) => state.user.user
    );
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
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                error={Boolean(fieldError.email)}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
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
                                value={data.password}
                                onChange={(e) => onChangeHandler(e)}
                                helperText={fieldError.password}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={Boolean(fieldError.password2)}
                                required
                                fullWidth
                                name="password2"
                                label="Repeat Password"
                                type="password"
                                id="password2"
                                value={data.password2}
                                onChange={(e) => onChangeHandler(e)}
                                helperText={fieldError.password2}

                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Typography variant="body2">
                                <Link to="/">
                                    Already have an account? Login
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