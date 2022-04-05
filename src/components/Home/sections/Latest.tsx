import {
  Flex,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import ProductCard from '@components/ProductCard';
import {products} from '@components/ProductCard/mock';
import TabPanelLatest from '@components/Home/sections/Tabs/TabPanelLatest';

export default function LatestSection() {
  return (
    <Container>
      <Flex as="section" direction="column" justify="center">
        <Heading
          as="h2"
          fontFamily="josefin"
          fontSize={{base: '26px', lg: '42px'}}
          color="navyBlue"
          textAlign="center"
        >
          Latest Products
        </Heading>
        <Tabs py="20px">
          <TabList
            border="none"
            justifyContent="center"
            color="navyBlue"
            fontFamily="lato"
          >
            <Tab
              _selected={{color: 'pink', borderColor: 'pink'}}
              _focus={{boxShadow: 'none'}}
            >
              New Arrival
            </Tab>
            <Tab
              _selected={{color: 'pink', borderColor: 'pink'}}
              _focus={{boxShadow: 'none'}}
            >
              Best Seller
            </Tab>
            <Tab
              _selected={{color: 'pink', borderColor: 'pink'}}
              _focus={{boxShadow: 'none'}}
            >
              Featured
            </Tab>
            <Tab
              _selected={{color: 'pink', borderColor: 'pink'}}
              _focus={{boxShadow: 'none'}}
            >
              Best Offer
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0" py="30px">
              <TabPanelLatest products={products} />
            </TabPanel>
            <TabPanel p="0" py="30px">
              <TabPanelLatest products={products} />
            </TabPanel>
            <TabPanel p="0" py="30px">
              <TabPanelLatest products={products} />
            </TabPanel>
            <TabPanel p="0" py="30px">
              <TabPanelLatest products={products} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
}
