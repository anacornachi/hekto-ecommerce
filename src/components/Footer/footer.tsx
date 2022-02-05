import {Flex, InputGroup, Input, InputRightElement, Text, Heading, Link as ChakraLink} from '@chakra-ui/react';

export default function footer() {
    return (
        <>
            <Flex 
                bg="pantonePurple" 
                h="532px"
                justify="center"
                gap="96px"
                >
                <Flex 
                    justify="row"
                    direction="column">
                    <Heading 
                        as="h4"
                        color="black"
                        fontFamily="josefin">Hekto</Heading>
                    
                    <InputGroup>
                        <InputRightElement
                            mt="31px"
                            bg="pink"
                            color="white"
                            cursor="pointer"
                            borderRadius="3px"
                            width="135px"
                            h={{base: '30px', lg: '40px'}}
                        >Sign Up</InputRightElement>
                        <Input
                            mt="31px"
                            placeholder="Enter Email Address"
                            borderRadius="3px"
                            width="377px"
                        />
                    </InputGroup>

                    <Text
                        mt="25px"
                        fontFamily="lato"
                        color="grey"
                    >Contact Info</Text>
                    <Text
                        mt="10px"
                        fontFamily="lato"
                        color="grey"
                    >17 Princess Road, London, Greater London NW1 8JR, UK</Text>

                </Flex>

                <Flex 
                    justify="row"
                    direction="column">

                        <Heading 
                        fontSize="22px"
                        color="black"
                        fontFamily="josefin">Categories</Heading>

                        <Text
                            mt="42px"
                            fontFamily="lato"
                            color="grey"
                            fontSize="16px"
                        >Laptops & Computers</Text>
                </Flex>

                <Flex 
                    justify="row"
                    direction="column">

                        <Heading 
                        fontSize="22px"
                        color="black"
                        fontFamily="josefin">Customer Care</Heading>

                        <Text
                            mt="42px"
                            fontFamily="lato"
                            color="grey"
                            fontSize="16px"
                        >My Account</Text>
                </Flex>

                <Flex 
                    justify="row"
                    direction="column">

                        <Heading 
                        fontSize="22px"
                        color="black"
                        fontFamily="josefin">Pages</Heading>

                        <Text
                            mt="42px"
                            fontFamily="lato"
                            color="grey"
                            fontSize="16px"
                        >Blog</Text>

                </Flex>

            </Flex>
        </>
    )
}