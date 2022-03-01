import {
  Flex,
  Button,
  Text,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import {FiMail, FiPhoneCall, FiHeart} from 'react-icons/fi';
import {BiUser} from 'react-icons/bi';
import {BsCart2} from 'react-icons/bs';
import {useRouter} from 'next/router';
import {useSession} from 'next-auth/react';
import {FiChevronDown} from 'react-icons/fi';

export default function TopHeader() {
  const router = useRouter();
  const {data: session, status} = useSession();
  const isAuthenticated = status === 'authenticated';
  return (
    <>
      <Flex bg="purple" h="44px" align="center">
        <Container>
          <Flex justify="space-between" w="100%" align="center">
            <Flex color="white" fontSize="16px" gridGap={{base: 0, md: '48px'}}>
              <Button
                variant="nav"
                justifyContent={{base: 'inherit', md: 'center'}}
              >
                <FiMail />
                <Text
                  mt="1px"
                  ml={2}
                  lineHeight="initial"
                  d={{base: 'none', md: 'block'}}
                >
                  mhhasanul@gmail.com
                </Text>
              </Button>
              <Button variant="nav">
                <FiPhoneCall />
                <Text
                  mt="1px"
                  ml={2}
                  lineHeight="initial"
                  d={{base: 'none', md: 'block'}}
                >
                  (12345)67890
                </Text>
              </Button>
            </Flex>
            <Flex
              color="white"
              fontSize="16px"
              align="center"
              gridGap={{base: '10px', md: '48px'}}
            >
              {/* <Button
                variant="nav"
                onClick={
                  isAuthenticated
                    ? () => router.push('/account/myaccount')
                    : () => router.push('/account/login')
                }
              >
                <Text
                  mt="1px"
                  mr={2}
                  lineHeight="initial"
                  d={{base: 'none', md: 'block'}}
                >
                  {isAuthenticated ? `Hi, ${session.firstName}` : 'Login'}
                </Text>
                <BiUser />
              </Button> */}
              <Menu closeOnBlur={true}>
                <MenuButton
                  fontFamily="josefin"
                  bg="none"
                  boxShadow="none"
                  _focus={{boxShadow: 'none', bg: 'none'}}
                  _hover={{bg: 'none'}}
                  _active={{bg: 'none'}}
                  as={Button}
                  rightIcon={<FiChevronDown />}
                >
                  Hi, Ana
                </MenuButton>
                <MenuList
                  bg="offPurple"
                  fontFamily="lato"
                  _selected={{bg: 'green'}}
                >
                  <MenuItem _hover={{bg: 'red'}}>My Account</MenuItem>
                  <MenuItem>Wishlist</MenuItem>
                  <MenuItem>Sign out</MenuItem>
                </MenuList>
              </Menu>
              {/* fim do teste */}
              <Button variant="nav">
                <Text
                  mt="1px"
                  mr={2}
                  lineHeight="initial"
                  d={{base: 'none', md: 'block'}}
                >
                  Wishlist
                </Text>
                <FiHeart />
              </Button>
              <Button variant="nav" fontSize="20px">
                <BsCart2 />
                <Circle
                  size="20px"
                  bg="pink"
                  color="white"
                  pos="absolute"
                  top="-5px"
                  right="-5px"
                  fontSize="12px"
                  d="flex"
                  align="center"
                >
                  <Text mt="1.5px">30</Text>
                </Circle>
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
