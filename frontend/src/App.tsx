import AppBar from './components/AppBar';
import Home from './screens/home'
import './app.css'
import { Container } from '@mui/material';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CVEditor from './screens/editor';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Container sx={{ my: 2 }} maxWidth="lg" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="editor" element={<CVEditor />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
