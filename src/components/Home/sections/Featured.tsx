import {Flex, Heading} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import ProductCard from '@components/ProductCard';
import {products} from '@components/ProductCard/mock';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper';
import {featuredBreakpoints} from 'src/constants/swiperBreakpoints';

export default function FeaturedSection() {
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
          Featured Products
        </Heading>
        <Flex
          gap={{base: '30px', md: '43px', lg: '63px', xl: '93px'}}
          wrap="wrap"
          justify="center"
          h="530px"
        >
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
                  variant="featured"
                  code={true}
                  bullets={true}
                  shadow={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Flex>
    </Container>
  );
}
