import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import digitalGardenThumb from '../images/digitalGardenThumb.png';
import React from 'react';

const Work = () => {
  return (
    <Container maxW={'container.sm'} pt={16}>
      <Heading as={'h2'} size='lg' textDecor={'underline'}>
        Work
      </Heading>
      <Heading as={'h3'} size='md' mt={6} textDecor={'underline'}>
        Featured
      </Heading>
      <LinkBox as={RouterLink} to='/work/digitalgarden'>
        <Box mt={4}>
          <Image
            loading='lazy'
            src={digitalGardenThumb}
            borderRadius={'xl'}
            alt={'Digital Garden Thumbnail'}
          />
          <Heading as={'h4'} size={'md'} mt={2} textAlign={'center'}>
            Digital Garden
          </Heading>
          <Text textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quibusdam aspernatur ad velit eum aut id ea asperiores, sed quidem
            deleniti earum, repellendus nobis.
          </Text>
        </Box>
      </LinkBox>
      <Grid
        mt={5}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={2}
      >
        <LinkBox as={RouterLink} to='/work/digitalgarden'>
          <GridItem w={'100%'} p={2}>
            <Image
              loading='lazy'
              src={digitalGardenThumb}
              borderRadius={'lg'}
              alt={'Digital Garden Thumbnail'}
            />
            <Heading as={'h4'} size={'md'} mt={2} textAlign={'center'}>
              Digital Garden
            </Heading>
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quibusdam aspernatur ad velit eum
            </Text>
          </GridItem>
        </LinkBox>
        <LinkBox as={RouterLink} to='/work/digitalgarden'>
          <GridItem w={'100%'} p={2}>
            <Image
              loading='lazy'
              src={digitalGardenThumb}
              borderRadius={'lg'}
              alt={'Digital Garden Thumbnail'}
            />
            <Heading as={'h4'} size={'md'} mt={2} textAlign={'center'}>
              Digital Garden
            </Heading>
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quibusdam aspernatur ad velit eum
            </Text>
          </GridItem>
        </LinkBox>
      </Grid>
    </Container>
  );
};

export default Work;
