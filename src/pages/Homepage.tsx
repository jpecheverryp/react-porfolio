import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import { Link as RouterLink } from 'react-router-dom';
const Homepage = () => {
  return (
    <Container maxW={'container.sm'} pt={16}>
      <Box
        my={6}
        p={3}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        borderRadius={'lg'}
        textAlign={'center'}
      >
        Hey there, I'm a Full Stack Developer based in Atlanta
      </Box>
      <Box>
        <Heading as={'h2'}>Juan P Echeverry</Heading>
        <Text>Software Developer (React / Node / Express)</Text>
      </Box>

      <Box as='section' mt={6}>
        <Heading as={'h3'} size='md' textDecoration={'underline'}>
          Work
        </Heading>
        <Text textAlign={'justify'}>
          Juan is a coding bootcamp graduate and self-taugh developer based in
          Atlanta with love to building software solutions for business
          problems. He has interest in learning and applying different
          productivity systems to organize and prioritize tasks and create
          projects. He likes to fold origami and practice rock climbing on his
          offline time
        </Text>
        <Box textAlign={'center'}>
          <Link as={RouterLink} to='/work'>
            <Button colorScheme={'orange'}>My Portfolio</Button>
          </Link>
        </Box>
      </Box>
      <Box as='section' mt={6}>
        <Heading as={'h3'} size='md' textDecoration={'underline'}>
          Find me on the web
        </Heading>
        <Flex direction={'column'}>
          <Button
            width={'fit-content'}
            as={'a'}
            href='https://www.linkedin.com/in/jpe04/'
            target={'_blank'}
            mt={2}
          >
            <Icon as={FaLinkedin} fontSize={25} mr={3} />
            @jpe04
          </Button>
          <Button
            width={'fit-content'}
            as={'a'}
            href='https://github.com/jpecheverryp'
            target={'_blank'}
            mt={2}
          >
            <Icon as={FaGithub} fontSize={25} mr={3} />
            @jpecheverryp
          </Button>

          <Button
            width={'fit-content'}
            as={'a'}
            href='mailto:jpecheverryp@gmail.com'
            target={'_blank'}
            mt={2}
          >
            <Icon as={FaEnvelope} fontSize={25} mr={3} />
            @jpecheverryp@gmail.com
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Homepage;
