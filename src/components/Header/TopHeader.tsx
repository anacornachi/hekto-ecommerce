import { Flex, Button, Text, Circle } from "@chakra-ui/react";
import Container from "@components/layouts/Container";

import { FiMail, FiPhoneCall, FiHeart } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

export default function TopHeader() {
  return (
    <>
      <Flex bg="purple" h="44px" align="center">
        <Container>
          <Flex justify="space-between" w="100%" align="center">
            <Flex color="white" fontSize="16px" gridGap="48px">
              <Button variant="nav">
                <FiMail />
                <Text mt="1px" ml={2} lineHeight="initial">
                  mhhasanul@gmail.com
                </Text>
              </Button>
              <Button variant="nav">
                <FiPhoneCall />
                <Text mt="1px" ml={2} lineHeight="initial">
                  (12345)67890
                </Text>
              </Button>
            </Flex>
            <Flex color="white" fontSize="16px" gridGap="48px" align="center">
              <Button variant="nav">
                <Text mt="1px" mr={2} lineHeight="initial">
                  Login
                </Text>
                <BiUser />
              </Button>
              <Button variant="nav">
                <Text mt="1px" mr={2} lineHeight="initial">
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
