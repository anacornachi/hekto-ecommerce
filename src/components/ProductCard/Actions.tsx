import {
  Button,
  Circle,
  Flex,
  FlexProps,
  Link as ChakraLink,
} from '@chakra-ui/react';
import React from 'react';
import {BsCart2} from 'react-icons/bs';
import {FiHeart} from 'react-icons/fi';
import {AiOutlineZoomIn} from 'react-icons/ai';
import Link from 'next/link';
import {string} from 'yup/lib/locale';

export type Actions = {
  variant?: string;
  mainColor?: string;
} & FlexProps;

export default function Actions({variant, mainColor, ...props}: Actions) {
  const isTop = variant === 'top';

  return (
    <Flex
      gap="10px"
      {...props}
      direction={isTop ? 'row' : 'column'}
      bottom={isTop ? 'initial' : 0}
      p="5px"
    >
      <Button
        bg="none"
        size="30px"
        height="30px"
        p="0"
        borderRadius="full"
        _focus={{boxShadow: 'none'}}
      >
        <Circle
          size="30px"
          color="offBlue"
          _hover={{bg: mainColor ?? '#EEEFFB'}}
        >
          <BsCart2 />
        </Circle>
      </Button>
      <Button
        bg="none"
        size="30px"
        height="30px"
        p="0"
        borderRadius="full"
        _focus={{boxShadow: 'none'}}
      >
        <Circle
          size="30px"
          color="offBlue"
          _hover={{bg: mainColor ?? '#EEEFFB'}}
        >
          <FiHeart />
        </Circle>
      </Button>
      <Link href="" passHref>
        <ChakraLink _hover={{border: 'none'}} _focus={{boxShadow: 'none'}}>
          <Circle
            size="30px"
            color="offBlue"
            _hover={{bg: mainColor ?? '#EEEFFB'}}
          >
            <AiOutlineZoomIn />
          </Circle>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
