import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import DigitalGarden from './pages/Projects/DigitalGarden';
import ReactEmployeeDirectory from './pages/Projects/ReactEmployeeDirectory';
import TauroeComm from './pages/Projects/TauroeComm';
import Work from './pages/Work';

function App() {
  return (
    <Box bg={useColorModeValue('#f5f7f5', '#202029')} pb={16}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='work' element={<Work />} />
        <Route path='work/digitalgarden' element={<DigitalGarden />} />
        <Route
          path='work/employeedirectory'
          element={<ReactEmployeeDirectory />}
        />
        <Route path='work/tauroecomm' element={<TauroeComm />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
