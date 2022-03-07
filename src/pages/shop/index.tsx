import {Flex, Heading, Input, Select, Text} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import ProductCard from '@components/ProductCard';
import {products} from '@components/ProductCard/mock';
import SubHeader from '@components/SubHeader';
import BrandsCarousel from '@components/ui/BrandsCarousel';
import ShopHeader from '@components/ui/ShopHeader';
import {IoGridSharp, IoListSharp} from 'react-icons/io5';

export default function ShopGrid() {
  return (
    <>
      <SubHeader title="Shop Grid Default" />
      <Container py={{base: '50px', md: '100px'}}>
        <ShopHeader value={products.length} time={0.62} />
        <Flex
          w="100%"
          gap={{base: 0, sm: '30px', md: '43px', lg: '63px', xl: '93px'}}
          wrap="wrap"
          justify="center"
          pt="70px"
          py="40px"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} variant="circle" />
          ))}
        </Flex>
        <BrandsCarousel mb="0" />
      </Container>
    </>
  );
}
