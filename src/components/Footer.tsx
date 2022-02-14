import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign={'center'} mt={'8'}>
      &copy; {new Date().getFullYear()} Juan P Echeverry. All Rights Reserved.
    </Box>
  );
};

export default Footer;
