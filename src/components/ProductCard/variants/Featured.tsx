import {Circle, Flex, Heading, Text} from '@chakra-ui/react';
import convertToUSD from '@utils/ConvertToUSD';
import React from 'react';
import Image from 'next/image';
import {useState} from 'react';
import Actions from '../Actions';

type Props = {
  data: TProduct;
};

export default function Featured({data}: Props) {
  const [isHover, setHover] = useState(false);

  return (
    <>
      <Flex
        direction="column"
        w={{base: '100%'}}
        maxW="270px"
        minW="270px"
        color={isHover ? 'white' : 'navyBlue'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        cursor="pointer"
        boxShadow="xl"
      >
        <Flex
          w="100%"
          position="relative"
          h="280px"
          bg={isHover ? '#F7F7F7' : '#F6F7FB'}
        >
          {data.main_image && (
            <Flex w="100%" h="100%" justify="center">
              <Image src={data.main_image} alt={data.alt} objectFit="contain" />
            </Flex>
          )}
          {isHover && (
            <Actions position="absolute" mainColor="#EEEFFB" variant="top" />
          )}
        </Flex>
        <Flex
          direction="column"
          align="center"
          fontFamily="josefin"
          gap="8px"
          p="10px"
          w="100%"
          bg={isHover ? '#2F1AC4' : 'white'}
        >
          <Heading
            as="h2"
            fontFamily="lato"
            fontSize="18px"
            maxWidth="100%"
            isTruncated
            color={isHover ? 'white' : '#EC42A2'}
          >
            {data.title}
          </Heading>
          <Flex gap="6px">
            <Circle size="10px" bg="#DE9034"></Circle>
            <Circle size="10px" bg="#EC42A2"></Circle>
            <Circle size="10px" bg="#8568FF"></Circle>
          </Flex>
          <Text mt="2px">Code - {data.id}</Text>
          <Flex gap="10px">
            {data.promotion ? (
              <>
                <Text p="0">{convertToUSD(data.promotion)}</Text>
                <Text p="0" as="del" color="pink">
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
