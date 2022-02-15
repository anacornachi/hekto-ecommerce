import {
  Button,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

import {FormProvider, useForm} from 'react-hook-form';
import {loginResolver} from '@components/Forms/loginResolver';
import CustomInput from './CustomInput';

export type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const toast = useToast();
  const methods = useForm({resolver: loginResolver, mode: 'onChange'});

  const onSubmit = async (data: any) => {
    console.log(data);
    toast({
      status: 'success',
      title: 'Bem vindo!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
    methods.reset();
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Nome e/ou senha inválidos. Tente novamente!',
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
          onSubmit={methods.handleSubmit(onSubmit, onError)}
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
          <FormProvider {...methods}>
            <CustomInput
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Password"
              mt="20px"
            />
          </FormProvider>
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
            type="submit"
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
              Don’t have an Account? Create account
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
