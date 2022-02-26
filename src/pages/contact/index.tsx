import {Circle, Flex, Heading, Text, useToast} from '@chakra-ui/react';
import Contact from '@components/Forms/Contact';
import Container from '@components/layouts/Container';
import SubHeader from '@components/SubHeader';
import React from 'react';
import contactUs from '@public/images/contact-us.svg';
import Image from 'next/image';

export default function ContactUs() {
  return (
    <>
      <SubHeader title="Contact Us" />
      <Container py="100px">
        <Flex w="100%" direction={{base: 'column', lg: 'row'}}>
          <Flex direction="column" w={{base: '100%', lg: '50%'}}>
            <Heading
              as="h3"
              color="navyBlue"
              fontFamily="josefin"
              fontSize="36px"
            >
              Information About us
            </Heading>
            <Text
              fontFamily="lato"
              fontSize="16px"
              color="#8A8FB9"
              mt="10px"
              w="80%"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </Text>
            <Flex gridGap="14px" mt="40px">
              <Circle size="25px" bg="#5625DF" />
              <Circle size="25px" bg="#FF27B7" />
              <Circle size="25px" bg="#37DAF3" />
            </Flex>
          </Flex>
          <Flex w="50%" direction="column">
            <Heading
              as="h3"
              color="navyBlue"
              fontFamily="josefin"
              fontSize="36px"
              mb="26px"
            >
              Contact Way
            </Heading>
            <Flex>
              <Flex w="50%" direction="column" gridGap="49px">
                <Flex>
                  <Circle size="45px" bg="#5625DF" />
                  <Text
                    ml="14px"
                    fontFamily="lato"
                    fontSize="16px"
                    color="#8A8FB9"
                  >
                    Tel: 877-67-88-99 <br /> E-Mail: shop@store.com
                  </Text>
                </Flex>
                <Flex>
                  <Circle size="45px" bg="#FFB265" />
                  <Text
                    ml="14px"
                    fontFamily="lato"
                    fontSize="16px"
                    color="#8A8FB9"
                  >
                    20 Margaret st, London <br /> Great britain, 3NM98-LK
                  </Text>
                </Flex>
              </Flex>
              <Flex w="50%" direction="column" gridGap="49px">
                <Flex>
                  <Circle size="45px" bg="#FB2E86" />
                  <Text
                    ml="14px"
                    fontFamily="lato"
                    fontSize="16px"
                    color="#8A8FB9"
                  >
                    Support Forum <br /> For over 24hr
                  </Text>
                </Flex>
                <Flex>
                  <Circle size="45px" bg="#1BE982" />
                  <Text
                    ml="14px"
                    fontFamily="lato"
                    fontSize="16px"
                    color="#8A8FB9"
                  >
                    Free standard shipping <br /> on all orders.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" mt="100px" direction={{base: 'column', lg: 'row'}}>
          <Flex w="40%" direction="column" mt="30px">
            <Heading
              as="h3"
              color="navyBlue"
              fontFamily="josefin"
              fontSize="36px"
            >
              Get In Touch
            </Heading>
            <Text
              fontFamily="lato"
              fontSize="16px"
              color="#8A8FB9"
              mt="10px"
              w="100%"
              mb="40px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </Text>
            <Contact />
          </Flex>
          <Flex w="60%" justify="center">
            <Image src={contactUs} alt="" />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
