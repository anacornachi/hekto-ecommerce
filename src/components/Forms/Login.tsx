import {
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import {FormProvider, useForm} from 'react-hook-form';
import {loginResolver} from '@components/Forms/resolvers/loginResolver';
import CustomInput from './CustomInput';
import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';

export default function Login() {
  const toast = useToast();
  const methods = useForm({resolver: loginResolver, mode: 'onChange'});
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const auth = (await signIn('credentials', {
      redirect: false,
      ...data,
    })) as any;
    if (auth?.error) {
      // Handle auth failed
      console.log('auth failed', auth.error);
      toast({
        title: 'Failed to login',
        description: 'Check the data and try again',
        status: 'error',
        position: 'bottom-end',
      });
    } else {
      toast({
        status: 'success',
        title: 'Welcome!',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      });
      router.push('/');
    }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Invalid name and/or password. Try again!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
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
          as="form"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <Heading as="h2" fontSize="32px" fontFamily="josefin">
            Login
          </Heading>
          <Text
            color="description"
            mb="37px"
            fontSize={{base: '14px', md: '17px'}}
          >
            Please login using account detail bellow.
          </Text>
          <FormProvider {...methods}>
            <CustomInput
              name="email"
              type="email"
              placeholder="Email Address"
              id="email"
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
              mt="20px"
              id="password"
            />
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
              fontFamily="lato"
              mt={{base: '30px', md: '23px'}}
              pt="0"
              variant="primary"
              type="submit"
            >
              Sign In
            </Button>
          </FormProvider>
          <Link href="/account/sign-up" passHref>
            <ChakraLink
              _hover={{color: 'pink'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              mt="28px"
            >
              Don’t have an Account? Create account!
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
