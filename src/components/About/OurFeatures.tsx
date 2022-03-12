import React from 'react';
import { Flex, Heading, Box} from '@chakra-ui/react';
import Container from '@components/layouts/Container'

export default function OurFeatures(){
    return (
        <Container>
            <Flex>
                <Heading
                color="navyBlue">
                    Our Features
                </Heading>
            </Flex>
        </Container>
    )
}