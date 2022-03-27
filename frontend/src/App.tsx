import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Alert, AlertColor, CircularProgress, Grid, Snackbar } from "@mui/material";
import AppBar from "./components/AppBar";
import CVEditor from "./screens/editor";
import Home from "./screens/home";
import Login from "./screens/user/login";
import Signup from "./screens/user/signup";
import NotFound from "./components/NotFound";
import RequireAuth from "./utils/RequireAuth";
import { userAuth } from "./redux/actions/user_actions/userActions";
import { AppState } from "./redux/Store";
import { deleteMessage } from "./redux/actions/cv_actions/messageActions";


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const message = useSelector(
    (state: AppState) => state.message.message
  );

  const checkUserAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      await dispatch(userAuth({ token: token }));
      setLoading(false);
    }
  };

  React.useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Snackbar
          autoHideDuration={6000}
          open={Boolean(message)}
          onClose={()=>dispatch(deleteMessage())}
        >
        <Alert onClose={()=>dispatch(deleteMessage())} severity={message?.type} sx={{ width: "100%" }}>
          {message?.message}
        </Alert>
        </Snackbar>
        <AppBar />

        {loading ?
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ my: 5 }}
          >
            <CircularProgress sx={{ my: 5 }} size={100} disableShrink />
          </Grid>
          : <Routes>
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="editor/:cvId" element={<RequireAuth><CVEditor /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
