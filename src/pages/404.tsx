import {Button, Flex, Heading} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import SubHeader from '@components/SubHeader';
import Image from 'next/image';
import notFound from '@public/images/not-found.png';
import BrandsCarousel from '@components/ui/BrandsCarousel';

export default function NotFound() {
  return (
    <>
      <SubHeader title="404 Not Found" />
      <Container>
        <Flex direction="column" align="center" pb="30px">
          <Image
            src={notFound}
            alt="error 404 - page not found"
            width="910px"
            height="675px"
          />
          <Heading
            as="h3"
            fontFamily="josefin"
            fontSize={{base: '12px', sm: '16px', lg: '24px'}}
            color="navyBlue"
            mb={{base: '20px', md: '62px'}}
            mt={{base: '-15px', md: '-90px'}}
          >
            oops! The page you requested was not found!
          </Heading>
          <Button variant="primary" mb={{base: '50px', lg: '110px'}}>
            Back to Home
          </Button>
          <BrandsCarousel />
        </Flex>
      </Container>
    </>
  );
}
