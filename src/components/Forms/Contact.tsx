import {Button, Flex, useToast} from '@chakra-ui/react';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {contactResolver} from '@components/Forms/resolvers/contactResolver';
import CustomInput from './CustomInput';

export default function Contact() {
  const toast = useToast();
  const methods = useForm({resolver: contactResolver, mode: 'onChange'});

  const onSubmit = async (data: any) => {
    console.log(data);
    toast({
      status: 'success',
      title: 'Your message was sent!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
    methods.reset();
  };

  const onError = () => {
    toast({
      status: 'error',
      title: 'An unexpected error occured. Try again later!',
      position: 'bottom-right',
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <>
      <Flex
        as="form"
        gap="40px"
        direction="column"
        w="100%"
        onSubmit={methods.handleSubmit(onSubmit, onError)}
      >
        <FormProvider {...methods}>
          <Flex w="100%" gap="34px">
            <CustomInput name="name" placeholder="Your Name*" />
            <CustomInput name="email" placeholder="Your Email*" />
          </Flex>
          <CustomInput name="subject" placeholder="Subject*" />
          <CustomInput
            name="message"
            placeholder="Type Your Message*"
            height="166px"
            overflowY="auto"
          />
          <Button variant="primary" w={{base: '50%', lg: '20%'}} type="submit">
            Send Mail
          </Button>
        </FormProvider>
      </Flex>
    </>
  );
}
