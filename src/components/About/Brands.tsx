import React from 'react';
import { Flex } from '@chakra-ui/react'
import BrandsCarousel from '@components/ui/BrandsCarousel'

export default function Brands() {
    return (
        <Flex
        justify="center"
        align="center"
        h="305px"
        >
            <BrandsCarousel />
        </Flex>
    )
}