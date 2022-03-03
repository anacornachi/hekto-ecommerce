import {Flex} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import ProductCard from '@components/ProductCard';
import {products} from '@components/ProductCard/mock';

export default function ShopGrid() {
  return (
    <>
      <Container>
        <Flex w="100%" gap="53px">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} variant="circle" />
          ))}
        </Flex>
      </Container>
    </>
  );
}
