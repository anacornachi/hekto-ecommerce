import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import {products} from '@components/ProductCard/mock';
import {BsArrowRight} from 'react-icons/bs';

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
              <Flex direction="column" gap="30px">
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
                          <BsArrowRight color="navyBlue" size="30px" />
                          <Text color="description">{detail}</Text>
                        </Flex>
                      );
                    })}
                </Flex>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
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
