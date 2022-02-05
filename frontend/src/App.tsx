import AppBar from './components/AppBar';
import Home from './screens/home'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CVEditor from './screens/editor';
import React from 'react';

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
