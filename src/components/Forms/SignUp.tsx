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
import {signUpResolver} from '@components/Forms/resolvers/signUpResolver';
import CustomInput from './CustomInput';
import {signUp} from '@services/auth';
import {capitalize} from '@utils/capitalize';
import createUserSerializer from '@utils/createUserSerializer';

import {signIn} from 'next-auth/react';
import {useRouter} from 'next/router';

const signUpInputs = [
  {name: 'firstName', type: 'text', placeholder: 'First Name'},
  {name: 'lastName', type: 'text', placeholder: 'Last Name'},
  {name: 'email', type: 'email', placeholder: 'Email Address'},
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
  },
  {
    name: 'passwordConfirmation',
    type: 'password',
    placeholder: 'Confirm Password',
  },
];

export default function SignUp() {
  const toast = useToast();
  const methods = useForm({resolver: signUpResolver, mode: 'onChange'});
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const serializedData = createUserSerializer(data);
    const {email, password} = serializedData;
    try {
      await signUp(serializedData);
      router.push('/');
      await signIn('credentials', {
        redirect: false,
        ...{email, password},
      });
      toast({
        status: 'success',
        title: 'Account created successfully!',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        status: 'error',
        title: 'Unable to register. Check the info and try again.',
        position: 'bottom-right',
        duration: 4000,
        isClosable: true,
      });
      methods.reset();
    }
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'Unable to register. Check the info and try again.',
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
          h="650px"
          align="center"
          direction="column"
          justify="center"
          p={{base: '10px', md: '50px'}}
          boxShadow="xl"
          as="form"
          onSubmit={methods.handleSubmit(onSubmit, onError)}
        >
          <Heading fontSize="32px" fontFamily="josefin">
            Sign Up
          </Heading>
          <Text
            color="description"
            mb="37px"
            fontSize={{base: '14px', md: '17px'}}
          >
            Please fill in the blanks to become part of Hekto.
          </Text>
          <FormProvider {...methods}>
            {signUpInputs &&
              signUpInputs.map((input, key) => {
                return (
                  <CustomInput
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    key={key}
                    mt={key === 0 ? 0 : '20px'}
                  />
                );
              })}
            <Button
              w="100%"
              fontFamily="lato"
              mt={{base: '30px', md: '23px'}}
              pt="0"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </FormProvider>
          <Link href="/account/create" passHref>
            <ChakraLink
              _hover={{color: 'pink'}}
              _focus={{boxShadow: 'none'}}
              color="description"
              mt="28px"
            >
              Already have an Account? Sign in!
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
