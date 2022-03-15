import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import React from "react";
import AppBar from "./components/AppBar";
import CVEditor from "./screens/editor";
import Home from "./screens/home";
import Login from "./screens/user/login";
import Signup from "./screens/user/signup";
import NotFound from "./components/NotFound";
import { AppState } from "./redux/Store";
import RequireAuth from "./utils/RequireAuth";


function App() {

  const user = useSelector(
    (state: AppState) => state.user.user
  );
  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      console.log(token);
    }
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="editor/:cvId" element={<RequireAuth><CVEditor /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
