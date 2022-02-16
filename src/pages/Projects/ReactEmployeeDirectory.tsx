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
import employeeDirectory from '../../images/employeeDirectory.png';
import employeeDirectory2 from '../../images/employeeDirectory2.png';

const ReactEmployeeDirectory = () => {
  return (
    <Container maxW={'container.sm'} pt={16}>
      <Breadcrumb mt={6}>
        <BreadcrumbItem as={RouterLink} to={'/work'}>
          <BreadcrumbLink>Work</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#' fontWeight={'bold'}>
            Employee Directory
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text mt={3}>
        React application that can be used to track different employees and
        their contact information. They can also be sorted and searched
      </Text>
      <Text mt={6}>
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
      </Text>
      <Text>
        <Text as={'span'} fontWeight={'bold'}>
          Repository:{' '}
        </Text>

        <Link
          href={'https://github.com/jpecheverryp/react-employee-directory'}
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
        <Image src={employeeDirectory} borderRadius='lg' />
      </Box>
      <Box mt={6}>
        <Image src={employeeDirectory2} borderRadius='lg' />
      </Box>
    </Container>
  );
};

export default ReactEmployeeDirectory;
