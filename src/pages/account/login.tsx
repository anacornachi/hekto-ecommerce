import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputRightElement,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

import SubHeader from '@components/SubHeader';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Login() {
  const router = useRouter();

  return (
    <>
      <SubHeader title="My Account" />
      <Flex
        align="center"
        justify="center"
        w="100%"
        py={{base: '40px', md: '110px'}}
      >
        <Flex
          w={{base: '100%', sm: '544px'}}
          h="474px"
          align="center"
          direction="column"
          justify="center"
          p={{base: '10px', md: '50px'}}
          boxShadow="xl"
        >
          <Heading fontSize="32px" fontFamily="josefin">
            Login
          </Heading>
          <Text
            color="description"
            mb="37px"
            fontSize={{base: '14px', md: '17px'}}
          >
            Please login using account detail bellow.
          </Text>
          <FormControl d="flex" flexDirection="column" gridGap="20px">
            <FormLabel htmlFor="email" d="none">
              Email address
            </FormLabel>
            <Input
              placeholder="Email Address"
              size="lg"
              borderColor="#C2C5E1"
              borderRadius="3px"
            />
            <FormLabel htmlFor="email" d="none">
              Password
            </FormLabel>
            <Input
              placeholder="Password"
              size="lg"
              borderColor="#C2C5E1"
              borderRadius="3px"
              type="password"
            />
          </FormControl>
          <Link href="/account/recover" passHref>
            <ChakraLink
              _hover={{color: 'pink'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              alignSelf="start"
              mt="13px"
            >
              Forgot your password?
            </ChakraLink>
          </Link>
          <Button
            w="100%"
            mt={{base: '30px', md: '23px'}}
            color="white"
            bg="pink"
            _hover={{background: 'pink'}}
            borderRadius="3px"
            h={{base: '50px', md: '47px'}}
            onClick={() => router.push('/')}
          >
            Sign In
          </Button>
          <Link href="/account/create" passHref>
            <ChakraLink
              _hover={{color: 'pink'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              mt="28px"
            >
              Don’t have an Account?Create account
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
