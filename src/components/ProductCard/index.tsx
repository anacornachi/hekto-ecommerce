import {Circle, Flex, Heading, Text} from '@chakra-ui/react';
import convertToUSD from '@utils/ConvertToUSD';
import Image from 'next/image';
import {useState} from 'react';
import Actions from './Actions';
import {styles} from './variants/styles';

export type Props = {
  data: TProduct;
  variant: string;
  code: boolean;
  bullets: boolean;
  shadow: boolean;
};

export default function ProductCard({
  data,
  variant,
  code,
  bullets,
  shadow,
}: Props) {
  const [isHover, setHover] = useState(false);

  const {actions, description, image, main, promotion, title} =
    styles(isHover)[variant];

  return (
    <>
      <Flex
        direction="column"
        w={{base: '100%'}}
        {...main}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        cursor="pointer"
        boxShadow={shadow ? 'xl' : 'none'}
      >
        <Flex w="100%" position="relative" h="280px" {...image}>
          {data.main_image && (
            <Flex w="100%" h="100%" justify="center">
              <Image src={data.main_image} alt={data.alt} objectFit="contain" />
            </Flex>
          )}
          {isHover && actions && <Actions position="absolute" {...actions} />}
        </Flex>
        <Flex {...description} align="center" gap="8px" p="10px" w="100%">
          <Heading {...title} as="h2" maxWidth="100%" isTruncated>
            {data.title}
          </Heading>
          {bullets && (
            <Flex gap="6px">
              <Circle size="10px" bg="#DE9034"></Circle>
              <Circle size="10px" bg="#EC42A2"></Circle>
              <Circle size="10px" bg="#8568FF"></Circle>
            </Flex>
          )}
          {code && <Text mt="2px">Code - {data.id}</Text>}
          <Flex gap="10px" align="center">
            {data.promotion ? (
              <>
                <Text p="0">{convertToUSD(data.promotion)}</Text>
                <Text p="0" as="del" {...promotion}>
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
