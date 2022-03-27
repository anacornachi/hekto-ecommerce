import {Box, Button, Circle, Flex, Heading, Text} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FeaturedSection from './sections/Featured';
import LatestSection from './sections/Latest';
import Image from 'next/image';

import TrendingSection from './sections/Trending';
import UniqueFeatures from '@components/Banners/UniqueFeatures';

export default function Home() {
  return (
    <>
      <Flex direction="column" py={{base: '50px', md: '100px'}} gap="60px">
        <FeaturedSection />
        <LatestSection />
        <Heading
          as="h2"
          fontFamily="josefin"
          fontSize={{base: '26px', lg: '42px'}}
          color="navyBlue"
          textAlign="center"
        >
          What Shopex Offer!
        </Heading>
        <Box bg="skyBlue" h={{base: '700px', lg: '579px'}} w="100%">
          <UniqueFeatures />
        </Box>
        <TrendingSection />
      </Flex>

      {/* 
            <Flex as="section" direction="column" align="center" gap="48px">
              <Heading
                as="h2"
                fontFamily="josefin"
                fontSize="42px"
                color="navyBlue"
              >
                Trending Products
              </Heading>
              <Flex gap="30px">
                {products.map((product) => (
                  <ProductCard
                    data={product}
                    variant="trending"
                    code={false}
                    bullets={false}
                    shadow={true}
                  />
                ))}
              </Flex>
            </Flex>
          </Flex> */}
    </>
  );
}
