import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import Link from 'next/link';
import {FiSearch} from 'react-icons/fi';
import {navigation} from './navigation';

export default function BottomHeader() {
  return (
    <>
      <Flex h="78px" align="center">
        <Container>
          <Flex
            justify="space-between"
            w="100%"
            align="center"
            wrap="wrap"
            px={{base: '15px', xl: 0}}
            h="100%"
          >
            <Heading
              as="h2"
              fontFamily="josefin"
              fontSize="34px"
              order="1"
              mt="5px"
              w={{base: '40%', lg: '12%'}}
            >
              Hekto
            </Heading>
            <Flex
              fontFamily="lato"
              order={{base: 3, lg: 2}}
              w={{base: '100%', lg: '50%'}}
              gridGap="35px"
              overflowX="scroll"
              justify={{base: 'space-between', lg: 'initial'}}
            >
              {navigation.map((page, key) => (
                <Link href={page.link} passHref key={key}>
                  <ChakraLink
                    _hover={{color: 'pink'}}
                    _focus={{boxShadow: 'none'}}
                  >
                    {page.label}
                  </ChakraLink>
                </Link>
              ))}
            </Flex>
            <InputGroup
              w={{base: '60%', lg: '35%'}}
              fontFamily="lato"
              order={{base: 2, lg: 3}}
            >
              <InputRightElement
                bg="pink"
                color="white"
                cursor="pointer"
                h={{base: '30px', lg: '40px'}}
              >
                <FiSearch />
              </InputRightElement>
              <Input
                placeholder="Search for a product"
                borderRadius="0"
                fontSize={{base: 'xs', lg: 'sm'}}
                h={{base: '30px', lg: '40px'}}
              />
            </InputGroup>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
