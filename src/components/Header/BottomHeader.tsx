import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Container from "@components/layouts/Container";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

export default function BottomHeader() {
  return (
    <>
      <Flex h="78px" align="center">
        <Container>
          <Flex justify="space-between" w="100%" align="center">
            <Flex gridGap="88px" align="center">
              <Heading as="h2" fontFamily="josefin" fontSize="34px">
                Hekto
              </Heading>
              <Flex fontFamily="lato" gridGap="35px">
                <Link href="/" passHref>
                  <ChakraLink _hover={{ color: "pink" }}>Home</ChakraLink>
                </Link>
                <Link href="/pages" passHref>
                  <ChakraLink _hover={{ color: "pink" }}>Pages</ChakraLink>
                </Link>
                <Link href="/products" passHref>
                  <ChakraLink _hover={{ color: "pink" }}>Products</ChakraLink>
                </Link>
                <Link href="/blog" passHref>
                  <ChakraLink _hover={{ color: "pink" }}>Blog</ChakraLink>
                </Link>
                <Link href="/shop" passHref>
                  <ChakraLink _hover={{ color: "pink" }}>Shop</ChakraLink>
                </Link>
                <Link href="/contact" passHref>
                  <ChakraLink _hover={{ color: "pink" }}>Contact</ChakraLink>
                </Link>
              </Flex>
            </Flex>
            <InputGroup w="315px" fontFamily="lato">
              <InputRightElement
                bg="pink"
                children={<FiSearch color="white" />}
                cursor="pointer"
              />
              <Input
                type="tel"
                placeholder="Search for a product"
                borderRadius="0"
              />
            </InputGroup>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
