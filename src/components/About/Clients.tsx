import React, { useState } from 'react'
import { Flex, Heading, Text, Circle } from '@chakra-ui/react';
import Image from 'next/image';
import clientData from '@components/About/clientData';

export default function Clients(){
    let [currentState, updateState] = useState(1)

    let data = clientData[currentState]

    const pictures = clientData.map((el,key) => {
        return (<Flex
            key={el.id}
            marginTop={currentState == key ? '60px' : '73px'}
            transition="1s"
            opacity={currentState != key ? '0.5' : '1'}
            borderRadius="3px"
            overflow="hidden"
            >
                <Image 
                src={el.image} 
                alt={el.alt}
                width="55px"
                height="59px"
                layout="fixed"
                onClick={() => updateState(key)}
                />
            </Flex>)
    })

    const indicators = clientData.map((el,key) => {
        return (
        <Circle
            marginTop="18px"
            bg="pink"
            size={currentState == key ? '10px' : '5px'}
            opacity={currentState != key ? '0.5' : '1'} />
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
                >
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
                marginTop="14px"
                width="690px"
                fontSize="16px"
                color="description" >
                    {data.testimonial}
                </Text>
                <Flex
                direction="row"
                justify="center"
                align="center"
                gap="6px">
                    {indicators}
                </Flex>
            </Flex>
        </Flex>
        
    )
}