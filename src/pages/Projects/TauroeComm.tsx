import React from 'react';
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
import tauroThumbnail from '../../images/tauroThumbnail.png';

const TauroeComm = () => {
  return (
    <Container maxW={'container.sm'} pt={16}>
      <Breadcrumb mt={6}>
        <BreadcrumbItem as={RouterLink} to={'/work'}>
          <BreadcrumbLink>Work</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#' fontWeight={'bold'}>
            Tauro e-commerce
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text mt={3}>React e-commerce application</Text>
      {/* <Text mt={6}>
        <Text as={'span'} fontWeight={'bold'}>
          Website:{' '}
        </Text>

        <Link
          href={'https://jpecheverryp.github.io/react-employee-directory/'}
          target={'_blank'}
          color={useColorModeValue('blue.600', 'orange.200')}
        >
          Live Site
        </Link>
      </Text> */}
      <Text>
        <Text as={'span'} fontWeight={'bold'}>
          Repository:{' '}
        </Text>

        <Link
          href={'https://github.com/jpecheverryp/ecomm'}
          target={'_blank'}
          color={useColorModeValue('blue.600', 'orange.200')}
        >
          Github Link
        </Link>
      </Text>
      <Text>
        <Text as={'span'} fontWeight={'bold'}>
          Tech Stack:{' '}
        </Text>
        <Text as={'span'}>React.js</Text>
      </Text>
      <Box mt={6}>
        <Image src={tauroThumbnail} borderRadius='lg' />
      </Box>
      <Box mt={6}>
        <Image src={tauroThumbnail} borderRadius='lg' />
      </Box>
    </Container>
  );
};

export default TauroeComm;
