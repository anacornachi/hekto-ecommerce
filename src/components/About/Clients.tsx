import React, { useState } from 'react'
import { Flex, Heading, Text, Circle } from '@chakra-ui/react';
import Image from 'next/image';
import clientData from '@components/About/clientData';

export default function Clients(){
    let [currentState, updateState] = useState(1)

    let data = clientData[currentState]

    const pictures = clientData.map((el,key) => {
        return (
            <Image 
                    src={el.image} 
                    alt={el.alt}
                    width="55px"
                    height="59px"
                    onClick={() => updateState(key)}
                    />
        )
    })

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
                    {pictures}
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