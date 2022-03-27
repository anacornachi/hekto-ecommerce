import {Box, SimpleGrid, TabPanel, useMediaQuery} from '@chakra-ui/react';
import ProductCard from '@components/ProductCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';
import {featuredBreakpoints} from 'src/constants/swiperBreakpoints';

type TabPanel = {
  products: TProduct[];
};

export default function TabPanelLatest({products}: TabPanel) {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)');
  return (
    <Box h={{base: '400px', lg: 'auto'}}>
      {isLargerThan1100 ? (
        <SimpleGrid
          columns={{base: 1, md: 2, lg: 3}}
          justifyItems="center"
          pt="40px"
          gap="90px"
        >
          {products.map((product, key) => (
            <ProductCard
              key={key}
              data={product}
              variant="latest"
              code={false}
              bullets={false}
              shadow={false}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Swiper
          navigation={false}
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={false}
          className="mySwiper"
          breakpoints={featuredBreakpoints}
        >
          {products.map((product, key) => (
            <SwiperSlide>
              <ProductCard
                key={key}
                data={product}
                variant="latest"
                code={false}
                bullets={false}
                shadow={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
