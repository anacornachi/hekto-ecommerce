import {Flex, SimpleGrid} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import ProductCard from '@components/ProductCard';
import {products} from '@components/ProductCard/mock';
import SubHeader from '@components/shared/SubHeader';
import BrandsCarousel from '@components/shared/BrandsCarousel';
import ShopHeader from '@components/shared/ShopHeader';

export default function ShopGrid() {
  return (
    <>
      <SubHeader title="Shop Grid Default" />
      <Container py={{base: '50px', md: '100px'}}>
        <ShopHeader value={products.length} time={0.62} />

        <SimpleGrid
          columns={{base: 1, md: 2, lg: 3, xl: 4}}
          spacing="40px"
          py="80px"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              variant="grid"
              code={false}
              bullets={true}
              shadow={false}
            />
          ))}
        </SimpleGrid>
        <BrandsCarousel mb="0" />
      </Container>
    </>
  );
}
