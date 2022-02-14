import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Work from './pages/Work';

function App() {
  return (
    <Box bg={useColorModeValue('#f5f7f5', '#202029')} pb={16}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='work' element={<Work />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
