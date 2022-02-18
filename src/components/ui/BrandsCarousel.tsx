import Container from '@components/layouts/Container';
import React from 'react';
import fashionLive from '@public/images/carousel/fashion-live.svg';
import handcrafted from '@public/images/carousel/hand-crafted.svg';
import mestonix from '@public/images/carousel/mestonix.svg';
import helloSunshine from '@public/images/carousel/hello-sunshine.svg';
import pure from '@public/images/carousel/pure.svg';
import Image from 'next/image';
import {Flex} from '@chakra-ui/react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper';

export default function BrandsCarousel() {
  return (
    <Container>
      <Flex h="128px" align="center" justify="space-around" w="100%">
        <Swiper
          navigation={false}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={fashionLive} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={handcrafted} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={mestonix} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={helloSunshine} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={pure} alt="" />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Container>
    // <Container>
    //   <Flex
    //     h="128px"
    //     align="center"
    //     justify="space-around"
    //     w="100%"
    //     gap={{base: '10px', lg: 0}}
    //     mb="60px"
    //   >
    //     <Image src={fashionLive} alt="" />

    //     <Image src={handcrafted} alt="" />

    //     <Image src={mestonix} alt="" />

    //     <Image src={helloSunshine} alt="" />

    //     <Image src={pure} alt="" />
    //   </Flex>
    // </Container>
  );
}
