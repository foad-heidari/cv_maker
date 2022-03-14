import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import AppBar from "./components/AppBar";
import CVEditor from "./screens/editor";
import Home from "./screens/home";
import Login from "./screens/user/login";
import Signup from "./screens/user/signup";
import NotFound from "./components/NotFound";
import { AppState } from "./redux/Store";


function App() {
  const user = useSelector(
    (state: AppState) => state.user.user
  );
  return (
    <>
      <BrowserRouter>
        <AppBar />
        {user ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="editor/:cvId" element={<CVEditor />} />
            <Route path='*' element={<NotFound />} />
          </Routes> :
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
