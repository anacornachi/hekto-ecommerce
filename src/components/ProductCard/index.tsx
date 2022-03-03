import {Circle, Flex, Heading, Text} from '@chakra-ui/react';
import Image from 'next/image';
import {TProducts} from 'src/types/products';
import Actions from './Actions';

export default function ProductCard({
  image,
  main_image,
  alt,
  title,
  url,
  id,
  price,
  promotion,
  color,
  colorType,
  variant,
  rate,
}: TProducts) {
  return (
    <>
      <Flex direction="column" w="270px" color="navyBlue">
        <Flex
          w="100%"
          position="relative"
          h="280px"
          cursor="pointer"
          _hover={{bg: 'lightGreen'}}
        >
          {main_image && (
            <Flex w="100%" h="100%" justify="center">
              <Image src={main_image} alt="" objectFit="contain" />
            </Flex>
          )}
          <Actions position="absolute" mainColor="white" />
        </Flex>
        <Flex
          direction="column"
          align="center"
          fontFamily="josefin"
          gap="8px"
          p="10px"
          w="100%"
        >
          <Heading
            as="h2"
            fontFamily="josefin"
            fontSize="18px"
            maxWidth="100%"
            isTruncated
          >
            Cantilever chair
          </Heading>
          <Flex gap="6px">
            <Circle size="10px" bg="#DE9034"></Circle>
            <Circle size="10px" bg="#EC42A2"></Circle>
            <Circle size="10px" bg="#8568FF"></Circle>
          </Flex>
          {/* {id && <Text>Code - {id}</Text>}  */}
          {/* TODO ver como renderizar somente quando quiser que o codigo seja exibido, pq id sempre tem */}
          <Flex gap="10px">
            {promotion ? (
              <>
                <Text p="0">{promotion}</Text>
                <Text p="0" as="del" color="pink">
                  {price}
                </Text>
              </>
            ) : (
              <Text p="0">{price}</Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
