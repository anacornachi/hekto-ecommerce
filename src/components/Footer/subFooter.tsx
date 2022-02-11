import {Flex, Text} from '@chakra-ui/react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';
import {TiSocialInstagramCircular} from 'react-icons/ti'
import {AiFillTwitterCircle} from 'react-icons/ai';

export default function subFooter(){
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