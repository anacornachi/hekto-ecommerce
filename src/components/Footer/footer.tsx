import {Flex, InputGroup, Input, InputRightElement, Text, Heading, Link as ChakraLink} from '@chakra-ui/react';
import Container from '@components/layouts/Container';
import {navigationFooter} from './navigation';

export default function footer() {
    return (
        <>
            <Flex bg="pantonePurple" >
                <Container >
                    <Flex
                        h={{base: 'auto', lg: '479px'}}
                        direction={{base: 'column', lg: 'row'}}
                        justify={{base: 'flex-start', lg: 'space-between'}}
                        align={{base: 'center', lg: 'flex-start'}}
                        >
                        <Flex 
                            alignSelf={{base: 'center', lg: 'flex-start'}}
                            mt="94px"
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
                                    h={{base: '40px', lg: '40px'}}
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

                        {navigationFooter.map((page) => (
                            <Flex 
                                direction="column"
                                align={{base: 'center', lg: 'flex-start'}}
                                >
                                
                                <Heading 
                                fontSize="22px"
                                color="black"
                                fontFamily="josefin"
                                mt="94px">{page.title}</Heading>

                                {page.subpage.subtitle.map((el,key) => key == 0 ? (<Text
                                                                        mt="42px"
                                                                        fontFamily="lato"
                                                                        color="grey"
                                                                        fontSize="16px">
                                                                                {el}</Text>) : (<Text
                                                                        mt="21px"
                                                                        fontFamily="lato"
                                                                        color="grey"
                                                                        fontSize="16px">
                                                                                {el}</Text>))}
                            </Flex>
                        ))}
                    </Flex>
                   

                </Container>

            </Flex>
        </>
    )
}