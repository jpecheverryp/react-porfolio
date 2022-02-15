import React from 'react';
import { Box, Link, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign={'center'} mt={'8'}>
      <Text>
        &copy; {new Date().getFullYear()} Juan P Echeverry. All Rights Reserved.
      </Text>
      <Text>
        Design inspired on{' '}
        <Link
          color={useColorModeValue('blue.600', 'orange.200')}
          href='https://www.craftz.dog/'
        >
          Takuya Matsuyama's Homepage
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
