import {Circle, Flex, Heading, Text} from '@chakra-ui/react';
import convertToUSD from '@utils/ConvertToUSD';
import React from 'react';
import Image from 'next/image';
import {useState} from 'react';
import Actions from '../Actions';

type Props = {
  data: TProduct;
};

export default function Trending({data}: Props) {
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
        boxShadow="xl"
        p="13px"
      >
        <Flex w="100%" position="relative" h="280px" bg="#F5F6F8">
          {data.main_image && (
            <Flex w="100%" h="100%" justify="center">
              <Image src={data.main_image} alt={data.alt} objectFit="contain" />
            </Flex>
          )}
          {isHover && <Actions position="absolute" mainColor="#EEEFFB" />}
        </Flex>
        <Flex
          direction="column"
          align="center"
          fontFamily="lato"
          justify="space-between"
          p="10px"
          w="100%"
          bg="white"
        >
          <Heading
            as="h2"
            fontFamily="lato"
            fontSize="18px"
            maxWidth="100%"
            isTruncated
          >
            {data.title}
          </Heading>

          <Flex gap="10px" mt="5px" fontSize="14px" align="center">
            {data.promotion ? (
              <>
                <Text p="0">{convertToUSD(data.promotion)}</Text>
                <Text p="0" as="del" color="description" fontSize="12px">
                  {convertToUSD(data.price)}
                </Text>
              </>
            ) : (
              <Text p="0">{convertToUSD(data.price)}</Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
