import { Box } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Work from './pages/Work';

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='work' element={<Work />} />
      </Routes>
    </Box>
  );
}

export default App;
