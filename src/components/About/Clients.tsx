import React, { useState } from 'react'
import { Flex, Heading, Text, Circle } from '@chakra-ui/react';
import Image from 'next/image';
import { clientData } from '@components/About/clientData';

export default function Clients(){
    let [currentState, updateState] = useState(0)

    let data = clientData[currentState]
    const img0 = clientData[0]
    const img1 = clientData[1]
    const img2 = clientData[2]

    return (
        <Flex
        backgroundColor="pantonePurple"
        marginTop="133px"
        direction="column"
        justify="center"
        align="center"
        h="503px">
                <Heading
                fontSize="42px"
                color="black"
                fontFamily="josefin"
                marginBottom="73px" >
                    Our Clients Say!
                </Heading>
            <Flex 
            direction="column"
            justify="center"
            align="center"
            textAlign="center" >
                <Flex
                direction="row"
                cursor="pointer"
                gap="20px">
                    <Image 
                    src={img1.image} 
                    alt={img1.alt}
                    width="55px"
                    height="59px"
                    onClick={() => updateState(1)}
                    />
                    <Image
                    src={img0.image} 
                    alt={img0.alt}
                    width="55px"
                    height="59px"
                    onClick={() => updateState(0)}
                    />
                    <Image 
                    src={img2.image} 
                    alt={img2.alt}
                    width="55px"
                    height="59px"
                    onClick={() => updateState(2)}
                    />
                </Flex>
                <Heading
                marginTop="25px"
                fontSize="22px"
                color="black"
                fontFamily="lato" >
                    {data.name}
                </Heading>
                <Text
                fontSize="10px"
                color="description">
                    {data.role}
                </Text>
                <Text
                width="690px"
                fontSize="16px"
                color="description" >
                    {data.testimonial}
                </Text>
            </Flex>
        </Flex>
        
    )
}