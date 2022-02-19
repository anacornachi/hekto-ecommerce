import {Flex, Text} from '@chakra-ui/react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';

export default function SubFooter(){
    return (
        <>
            <Flex
                bgColor="lightPurple"
                h="53px"
                justify="space-around"
                align="center"
            >
                <Text color="grey">
                    © Webecy - All Rights Reserved
                </Text>
                <Flex 
                    w="80px"
                    justify="space-around">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                </Flex>
            </Flex>
        </>
    )
}