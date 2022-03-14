import React from 'react';
import { Flex, Heading, Text} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import navigation from '@components/About/navigation';
import FeaturesCard from '@components/FeaturesCard';

export default function OurFeatures(){
    const cards = navigation && navigation.map((el, key) => (
        <FeaturesCard
        key={el.id}
        {...el} />
    ))
    return (
        <Container>
            <Flex
            direction="column"
            color="navyBlue"
            alignItems="center">
                <Heading
                fontFamily="josefin">
                    Our Features
                </Heading>
                <Flex
                direction="row"
                gap="28px"
                marginTop="67px"
                >
                    {cards}
                </Flex>
            </Flex>
        </Container>
    )
}