import React from 'react';
import {Flex, Text, Heading, Button} from '@chakra-ui/react';
import Image from 'next/image';
import Container from '@components/layouts/Container';
import aboutUs from '@public/images/about-us.png';

export default function AboutUs(){
    return (
        <Container>
            <Flex
            direction="row"
            justify="center">
                <Flex
                p="118px 30px">
                    <Image 
                    src={aboutUs}
                    alt="about us"
                    width="550px"
                     />
                </Flex>

                <Flex
                direction="column"
                width="550px">
                    <Heading
                    color="navyBlue"
                    fontFamily="josefin"
                    fontSize="36px"
                    mt="160px">Know About Our Ecommerce Business, History</Heading>

                    <Text
                    color="description"
                    m="16px 0 100px 0">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, voluptas molestiae error fuga eos ducimus provident animi illo iure nesciunt aliquam nihil, optio modi quasi reiciendis officiis perferendis amet hic.</Text>
                    <Button
                    variant="primary"
                    width="145px"
                    height="44px">
                        Contact Us
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}