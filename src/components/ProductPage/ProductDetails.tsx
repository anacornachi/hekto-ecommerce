import {Button, Circle, Flex, Heading, Tag, Text} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import convertToUSD from '@utils/ConvertToUSD';
import Image from 'next/image';
import {useState} from 'react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import {FiHeart} from 'react-icons/fi';
import Rating from './Rating';

type Props = {
  product: TProduct;
};

export default function ProductDetails({product}: Props) {
  const [imageOnScreen, setImageOnScreen] = useState(product.main_image);
  return (
    <Container py="121px">
      <Flex w="100%" h="600px" boxShadow="2xl">
        <Flex w="50%" p="13px" h="100%" gap="13px">
          <Flex direction="column" w="30%" h="100%" gap="13px">
            {product.image &&
              product.image.map((image) => {
                return (
                  <Flex
                    h="33.33%"
                    w="100%"
                    direction="column"
                    borderRadius="md"
                    objectFit="cover"
                    position="relative"
                    cursor="pointer"
                    onClick={() => setImageOnScreen(image)}
                  >
                    <Image src={image} alt="" layout="fill" />
                  </Flex>
                );
              })}
          </Flex>
          <Flex
            w="70%"
            gap="13px"
            height="100%"
            direction="column"
            borderRadius="md"
            position="relative"
          >
            <Image src={imageOnScreen} alt="" layout="fill" />
          </Flex>
        </Flex>
        <Flex
          w="50%"
          p="40px"
          direction="column"
          gap="11px"
          fontFamily="josefin"
          color="navyBlue"
          justify="center"
        >
          <Heading fontSize="36px" fontWeight="semibold" fontFamily="josefin">
            {product.title}
          </Heading>
          {product.rate && <Rating array={product.rate} />}
          <Flex gap="10px" my="10px" align="center">
            {product.promotion ? (
              <>
                <Text p="0" fontSize="20px">
                  {convertToUSD(product.promotion)}
                </Text>
                <Text p="0" as="del" color="pink">
                  {convertToUSD(product.price)}
                </Text>
              </>
            ) : (
              <Text p="0" fontSize="20px">
                {convertToUSD(product.price)}
              </Text>
            )}
          </Flex>
          <Flex gap="15px">
            <Text fontWeight="semibold">Color:</Text>
            {product.color &&
              product.color.map((color) => {
                return <Circle bg={color} size="20px" />;
              })}
          </Flex>
          <Text color="description" maxH="150px" noOfLines={4}>
            {product.description}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
            asperiores! Quis architecto, incidunt totam a fugiat doloribus
            blanditiis aut exercitationem? Quibusdam temporibus corrupti
            adipisci deserunt totam culpa, esse praesentium. Commodi?
          </Text>
          <Button variant="primary" rightIcon={<FiHeart />} w="30%" my="15px">
            Add to cart
          </Button>
          <Flex gap="20px" direction="column">
            <Flex gap="10px" align="center">
              <Text>Categories:</Text>
              {product.categories &&
                product.categories.map((category) => (
                  <Tag maxW="fit-content" cursor="pointer" bg="pantonePurple">
                    {category}
                  </Tag>
                ))}
            </Flex>
            <Flex gap="10px" align="center">
              <Text>Tags:</Text>
              {product.tags &&
                product.tags.map((tag) => (
                  <Tag maxW="fit-content" cursor="pointer" bg="pantonePurple">
                    {tag}
                  </Tag>
                ))}
            </Flex>
            <Flex gap="15px" align="center">
              <Text mt="2px">Share:</Text>
              <BsFacebook cursor="pointer" />
              <BsInstagram cursor="pointer" />
              <BsTwitter cursor="pointer" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
