import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import Image from 'next/image';
import lightFixture from '@public/images/lightFixture.png';
import sofa from '@public/images/mainBannerSofa.png';

export default function Banner() {
  return (
    <>
      <Box bg="lightPurple" w="100vw">
        <Container>
          <Flex direction={{base: 'column', md: 'row'}}>
            <Box
              maxW="100%"
              w={{base: '30%', md: '50%', lg: '30%'}}
              position={{base: 'absolute', md: 'relative'}}
              right={{base: 0, md: 0}}
            >
              <Image src={lightFixture} alt="" />
            </Box>
            <Flex
              width="100%"
              position="relative"
              direction="column"
              mt={{base: '40px', md: 0}}
              justify={{md: 'center'}}
              maxW={{md: '40%', lg: '60%'}}
            >
              <Heading
                as="h3"
                fontFamily="lato"
                color="pink"
                fontSize={{base: '12px', md: ''}}
                mb="10px"
              >
                Best Furniture For Your Castle....
              </Heading>
              <Heading
                as="h2"
                fontSize={{base: '25px', lg: '40px'}}
                fontFamily="josefin"
                maxW={{base: '80%'}}
              >
                New Furniture Collection Trends in 2022
              </Heading>
              <Text
                fontFamily="lato"
                color="description"
                my="20px"
                fontSize="14px"
                w={{sm: '70%', md: '80%'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </Text>
              <Button
                variant="primary"
                w={{base: '100%', sm: '30%', md: '50%', xl: '20%'}}
              >
                Shop Now
              </Button>
            </Flex>
            <Box
              py="20px"
              h={{base: '100%'}}
              w={{base: '70%'}}
              alignSelf="center"
            >
              <Image src={sofa} alt="" />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
