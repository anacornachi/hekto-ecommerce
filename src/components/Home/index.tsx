import {Flex, Heading} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import ProductCard from '@components/ProductCard';
import {products} from '@components/ProductCard/mock';
import React from 'react';

export default function Home() {
  return (
    <>
      <Container py="120px">
        <Flex direction="column" gap="100px">
          <Flex as="section" direction="column" align="center" gap="48px">
            <Heading
              as="h2"
              fontFamily="josefin"
              fontSize="42px"
              color="navyBlue"
            >
              Featured Products
            </Heading>
            <Flex gap="30px">
              {products.map((product) => (
                <ProductCard
                  data={product}
                  variant="featured"
                  code={true}
                  bullets={true}
                  shadow={true}
                />
              ))}
            </Flex>
            <Flex as="section" direction="column" align="center" gap="48px">
              <Heading
                as="h2"
                fontFamily="josefin"
                fontSize="42px"
                color="navyBlue"
              >
                Latest Products
              </Heading>
              <Flex gap="30px">
                {products.map((product) => (
                  <ProductCard
                    data={product}
                    variant="latest"
                    code={false}
                    bullets={false}
                    shadow={false}
                  />
                ))}
              </Flex>
            </Flex>
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
          </Flex>
          {/* 
         
          <Flex as="section" direction="column" align="center" gap="48px">
            <Heading
              as="h2"
              fontFamily="josefin"
              fontSize="42px"
              color="navyBlue"
            >
              Top Categories
            </Heading>
            <Flex gap="30px">
              {products.map((product) => (
                <ProductCard data={product} variant="top" />
              ))}
            </Flex>
          </Flex>
          <Flex as="section" direction="column" align="center" gap="48px">
            <Heading
              as="h2"
              fontFamily="josefin"
              fontSize="42px"
              color="navyBlue"
            >
              Grid
            </Heading>
            <Flex gap="30px">
              {products.map((product) => (
                <ProductCard data={product} variant="grid" />
              ))}
            </Flex>
          </Flex> */}
        </Flex>
      </Container>
    </>
  );
}
