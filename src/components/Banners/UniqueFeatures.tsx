import {Button, Circle, Flex, Heading, Text} from '@chakra-ui/react';
import Image from 'next/image';
import armchair from '@public/images/armchair_banner.png';
import Container from '@components/layouts/Container';

export default function UniqueFeatures() {
  return (
    <Container h="100%">
      <Flex
        w="100%"
        h="100%"
        justify="center"
        direction={{base: 'column', lg: 'row'}}
        py={{md: '40px', lg: 0}}
      >
        <Flex
          width={{base: '100%', lg: '50%'}}
          h={{sm: '60%', md: '70%', lg: '100%'}}
          justify="center"
        >
          <Image src={armchair} alt="arm chair" loading="lazy" />
        </Flex>
        <Flex
          direction="column"
          w={{base: '100%', lg: '40%'}}
          color="navyBlue"
          py={{base: 0, lg: '90px'}}
          gap="30px"
        >
          <Heading
            fontFamily="josefin"
            fontSize={{base: '25px', lg: '35px'}}
            alignSelf="center"
          >
            Unique Features of Latest & Trending products
          </Heading>
          <Flex direction="column" gap="13px" w="90%">
            <Flex align="center">
              <Circle size="11px" bg="#F52B70" />
              <Text
                ml="14px"
                fontFamily="lato"
                fontSize={{base: '12px', lg: '16px'}}
                color="#8A8FB9"
              >
                All frames constructed with hardwood solids and laminates
              </Text>
            </Flex>
            <Flex align="center">
              <Circle size="11px" bg="#2B2BF5" />
              <Text
                ml="14px"
                fontFamily="lato"
                fontSize={{base: '12px', lg: '16px'}}
                color="#8A8FB9"
              >
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </Text>
            </Flex>
            <Flex align="center">
              <Circle size="11px" bg="#2BF5CC" />
              <Text
                ml="14px"
                fontFamily="lato"
                fontSize={{base: '12px', lg: '16px'}}
                color="#8A8FB9"
              >
                Arms, backs and seats are structurally reinforced
              </Text>
            </Flex>
          </Flex>
          <Flex gap="20px" justify={{base: 'center', lg: 'left'}}>
            <Button variant="primary" w="45%">
              Add to Cart
            </Button>
            <Text fontFamily="josefin">
              <span style={{fontWeight: 'bold'}}>B&B Italian Sofa</span> <br />{' '}
              $32.00
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
