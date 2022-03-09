import {Circle, Flex, Heading, Text} from '@chakra-ui/react';
import convertToUSD from '@utils/ConvertToUSD';
import React from 'react';
import Image from 'next/image';
import {useState} from 'react';
import Actions from '../Actions';

type Props = {
  data: TProduct;
};

export default function Top({data}: Props) {
  const [isHover, setHover] = useState(false);

  return (
    <>
      <Flex
        direction="column"
        w={{base: '100%'}}
        maxW="270px"
        minW="270px"
        color="navyBlue"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        cursor="pointer"
      >
        <Circle
          size="269px"
          bg="#F6F7FB"
          _hover={
            isHover ? {boxShadow: ' -5px 5px #9574e5'} : {boxShadow: 'none'}
          }
        >
          <Flex w="100%" position="relative">
            {data.main_image && (
              <Flex w="100%" h="100%" justify="center">
                <Image
                  src={data.main_image}
                  alt={data.alt}
                  objectFit="contain"
                />
              </Flex>
            )}
          </Flex>
        </Circle>

        <Flex
          direction="column"
          align="center"
          fontFamily="lato"
          justify="space-between"
          p="10px"
          w="100%"
          bg="white"
          mt="10px"
        >
          <Heading
            as="h2"
            fontFamily="josefin"
            fontWeight="normal"
            fontSize="18px"
            maxWidth="100%"
            isTruncated
          >
            {data.title}
          </Heading>
        </Flex>
      </Flex>
    </>
  );
}
