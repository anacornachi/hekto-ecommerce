import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function FeaturesCard(props: {id: number, image: string, alt: string, title: string, text: string}) {
    return (
    <Flex
        boxShadow="xl"
        direction="column"
        justify="center"
        align="center"
        fontSize="22px"
        h="320px"
        w="270px"
        p="27px"
        textAlign="center"
        borderBottom="solid"
        borderColor="transparent"
        _hover={{borderColor: '#DE9034'}}
        >
            <Image 
            src={props.image} 
            alt={props.alt}
            width="65px"
            height="65px"
             ></Image>
            <Heading
            as="h2"
            fontFamily="josefin"
            fontSize="22px"
            marginTop="21px">
                {props.title}
                </Heading>
            <Text
            marginTop="20px"
            fontSize="16px"
            color="grey">
                {props.text}
                </Text>
        </Flex>
    )
}