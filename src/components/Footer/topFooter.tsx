import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Heading,
  Link as ChakraLink,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import {navigationFooter} from './navigation';
import Link from 'next/link';

export default function TopFooter() {
  return (
    <>
      <Flex bg="pantonePurple">
        <Container>
          <Flex
            h={{base: 'auto', lg: '479px'}}
            direction={{base: 'column', lg: 'row'}}
            justify={{base: 'flex-start', lg: 'space-between'}}
            align={{base: 'center', lg: 'flex-start'}}
          >
            <Flex
              m="94px 20px 20px 20px"
              direction="column"
              align={{base: 'center', lg: 'flex-start'}}
            >
              <Heading as="h4" color="black" fontFamily="josefin">
                Hekto
              </Heading>

              <InputGroup>
                <InputRightElement
                  mt="31px"
                  bg="pink"
                  color="white"
                  cursor="pointer"
                  borderRadius="3px"
                  width={{base: '80px', md: '135px', lg: '135px'}}
                  h={{base: '40px', md: '40px', lg: '40px'}}
                >
                  Sign Up
                </InputRightElement>
                <Input
                  mt="31px"
                  placeholder="Enter Email Address"
                  borderRadius="3px"
                  width={{base: '280px', md: '377px', lg: '377px'}}
                />
              </InputGroup>

              <Text mt="25px" fontFamily="lato" color="grey">
                Contact Info
              </Text>
              <Text mt="12px" fontFamily="lato" color="grey" textAlign="center">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </Text>
            </Flex>

            {navigationFooter &&
              navigationFooter.map((page, key) => (
                <Flex
                  key={key}
                  direction="column"
                  align={{base: 'center', lg: 'flex-start'}}
                >
                  <Heading
                    fontSize="22px"
                    color="black"
                    fontFamily="josefin"
                    mt={{base: '40px', lg: '94px'}}
                    mb={{base: '25px', lg: '42px'}}
                  >
                    {page.title}
                  </Heading>

                  {page.navigation.map((el, key) => (
                    <Link href={el.link} passHref key={key}>
                      <ChakraLink
                        mt={key === 0 ? '0' : '21px'}
                        mb={key === 5 ? '40px' : '0'}
                        fontFamily="lato"
                        color="grey"
                        fontSize="16px"
                        textDecoration="none"
                        _hover={{color: 'pink'}}
                        _focus={{boxShadow: 'none'}}
                      >
                        {el.label}
                      </ChakraLink>
                    </Link>
                  ))}
                </Flex>
              ))}
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
