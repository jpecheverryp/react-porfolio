import React from 'react';
import {
  Button,
  Container,
  Flex,
  Icon,
  Link,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconBg = useColorModeValue('purple.500', 'yellow.400');
  const iconColor = useColorModeValue('white', 'black');
  const icon = useColorModeValue(MoonIcon, SunIcon);
  return (
    <nav>
      <Container>
        <Flex
          p={3}
          justifyContent={'space-between'}
          alignItems={'center'}
          wrap={'wrap'}
        >
          <Flex>
            <Link as={RouterLink} to='/' fontWeight={'bold'} mr={3}>
              Juan P Echeverry
            </Link>
            <Link as={RouterLink} to='work' mr={3}>
              Work
            </Link>
            <Flex alignItems={'center'} gap={1}>
              <Icon as={FaGithub} />
              <Link
                as={'a'}
                href='https://github.com/jpecheverryp/react-porfolio'
                target={'_blank'}
              >
                Source
              </Link>
            </Flex>
          </Flex>
          <Button onClick={toggleColorMode} bg={iconBg}>
            <Icon as={icon} color={iconColor} />
          </Button>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
