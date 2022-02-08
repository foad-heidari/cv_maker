import "./app.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppBar from "./components/AppBar";
import CVEditor from "./screens/editor";
import Home from "./screens/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="editor" element={<CVEditor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
