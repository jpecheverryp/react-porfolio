import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconBg = useColorModeValue('purple.500', 'yellow.200');
  const iconColor = useColorModeValue('white', 'black');

  return (
    <Box
      as='nav'
      position={'fixed'}
      w={'100%'}
      bg={useColorModeValue('#fff', '#202020')}
      zIndex={1}
    >
      <Container
        display={'flex'}
        pt={3}
        pb={2}
        maxW={'container.md'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
      >
        <Flex alignItems={'center'}>
          <Heading as={'h1'} size='md'>
            <Link as={RouterLink} to='/'>
              Juan P Echeverry
            </Link>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          ml={6}
        >
          <Link as={RouterLink} to='work' mr={3}>
            Work
          </Link>

          <Flex as={'span'} alignItems={'center'} gap={1}>
            <Icon as={FaGithub} />
            <Link
              as={'a'}
              href='https://github.com/jpecheverryp/react-porfolio'
              target={'_blank'}
            >
              Source
            </Link>
          </Flex>
        </Stack>

        <Box display={'flex'}>
          <IconButton
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            bg={iconBg}
            color={iconColor}
            aria-label={'Switch theme'}
          />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton as={IconButton} icon={<HamburgerIcon />}></MenuButton>
              <MenuList>
                <Link as={RouterLink} to='/'>
                  <MenuItem>About</MenuItem>
                </Link>
                <Link as={RouterLink} to='work'>
                  <MenuItem>Work</MenuItem>
                </Link>
                <MenuItem
                  as={'a'}
                  href='https://github.com/jpecheverryp/react-porfolio'
                  target={'_blank'}
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
