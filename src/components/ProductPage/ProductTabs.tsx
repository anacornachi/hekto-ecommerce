import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import {products} from '@components/ProductCard/mock';
import ListTable from '@components/shared/ListTable';
import {FaArrowRight} from 'react-icons/fa';
import {singleProductColumns} from './singleProductColumns';

type Props = {
  product: TProduct;
};

export default function ProductTabs({product}: Props) {
  return (
    <Box bg="pantonePurple">
      <Container py="115px">
        <Tabs>
          <TabList
            border="none"
            color="navyBlue"
            fontFamily="josefin"
            fontSize="24px"
          >
            <Tab
              _focus={{
                boxShadow: 'none',
              }}
            >
              Description
            </Tab>
            <Tab
              _focus={{
                boxShadow: 'none',
              }}
            >
              Additional Info
            </Tab>
            <Tab
              _focus={{
                boxShadow: 'none',
              }}
            >
              Reviews
            </Tab>
            <Tab
              _focus={{
                boxShadow: 'none',
              }}
            >
              Video
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel py="60px" fontFamily="josefin">
              <Flex direction="column" gap="36px">
                <Flex direction="column" gap="15px">
                  <Heading
                    as="h3"
                    fontFamily="josefin"
                    color="navyBlue"
                    fontSize="22px"
                  >
                    Varius tempor.
                  </Heading>
                  <Text color="description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt blanditiis libero asperiores quae quos corporis
                    iusto hic, sed sapiente maiores dolorem tempore, voluptas
                    voluptatem, tempora et fugit distinctio molestiae atque?
                  </Text>
                </Flex>
                <Flex direction="column" gap="15px">
                  <Heading
                    as="h3"
                    fontFamily="josefin"
                    color="navyBlue"
                    fontSize="22px"
                  >
                    More details
                  </Heading>
                  {product.details &&
                    product.details.map((detail, key) => {
                      return (
                        <Flex align="center" key={key}>
                          <FaArrowRight size="15px" fill="#151875" />
                          <Text ml="10px" color="description">
                            {detail}
                          </Text>
                        </Flex>
                      );
                    })}
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <ListTable
                columns={singleProductColumns}
                rows={
                  (product.code,
                  product.size,
                  product.color,
                  product.unity,
                  product.manufacturer)
                }
              >
                <Tr>
                  <Td>{product.code}</Td>
                  <Td>{product.size}</Td>
                  <Td>{product.color}</Td>
                  <Td>{product.unity}</Td>
                  <Td>{product.manufacturer}</Td>
                </Tr>
              </ListTable>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}
