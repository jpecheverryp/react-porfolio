import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import digitalGardenThumb from '../../images/digitalGardenThumb.png';
import digitalGardenThumb2 from '../../images/digitalGardenThumb2.png';

const DigitalGarden = () => {
  return (
    <Container maxW={'container.sm'} pt={16}>
      <Breadcrumb mt={6}>
        <BreadcrumbItem as={RouterLink} to={'/work'}>
          <BreadcrumbLink>Work</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#' fontWeight={'bold'}>
            Digital Garden
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text mt={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
        assumenda adipisci? Culpa quas saepe impedit iste soluta mollitia
        aliquam atque sunt? Enim fuga aliquid quasi, alias adipisci quisquam
        praesentium doloribus.
      </Text>
      <Text mt={6}>
        <Text as={'span'} fontWeight={'bold'}>
          Website:{' '}
        </Text>

        <Link
          href={'https://github.com/jpecheverryp'}
          target={'_blank'}
          color={useColorModeValue('blue.600', 'orange.200')}
        >
          My Github Link
        </Link>
      </Text>
      <Text>
        <Text as={'span'} fontWeight={'bold'}>
          Repository:{' '}
        </Text>

        <Link
          href={'https://github.com/jpecheverryp'}
          target={'_blank'}
          color={useColorModeValue('blue.600', 'orange.200')}
        >
          My Github Link
        </Link>
      </Text>
      <Text>
        <Text as={'span'} fontWeight={'bold'}>
          Tech Stack:{' '}
        </Text>
        <Text as={'span'}>
          React / Express / TypeScript / Node / Sequelize / MySQL
        </Text>
      </Text>
      <Box mt={6}>
        <Image src={digitalGardenThumb} borderRadius='lg' />
      </Box>
      <Box mt={6}>
        <Image src={digitalGardenThumb2} borderRadius='lg' />
      </Box>
    </Container>
  );
};

export default DigitalGarden;
