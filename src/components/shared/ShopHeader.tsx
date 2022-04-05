import {Flex, Heading, Input, Select, Text} from '@chakra-ui/react';
import React from 'react';
import {IoGridSharp, IoListSharp} from 'react-icons/io5';

export type Props = {
  value: number;
  time: number;
};

export default function ShopHeader({value, time}: Props) {
  return (
    <Flex
      direction={{base: 'column', xl: 'row'}}
      w="100%"
      gap={{base: '30px', md: '30px'}}
    >
      <Flex w={{base: '100%', xl: '50%'}} direction="column">
        <Heading as="h1" fontFamily="josefin" color="navyBlue" fontSize="22px">
          Ecommerce Accessories & Fashion Items
        </Heading>
        <Text color="#8A8FB9" fontSize="12px">
          {`About ${value} results (${time} seconds)`}
        </Text>
      </Flex>
      <Flex
        gap={{base: '20px', md: '30px'}}
        w={{base: '100%', xl: '50%'}}
        justify={{base: 'start', md: 'end'}}
        direction={{base: 'column', md: 'row'}}
      >
        <Flex align="center" w={{base: '100%', lg: '33%'}}>
          <label
            style={{fontSize: '16px', color: '#151875', width: '40%'}}
            id="view-per-page"
          >
            Per Page:
          </label>
          <Input
            borderRadius="none"
            color="navyBlue"
            h="25px"
            id="view-per-page"
            max="20"
            maxW="55px"
            min="0"
            ml="8px"
            placeholder="12"
            textAlign="center"
            type="number"
            w="60%"
          />
        </Flex>
        <Flex align="center" w={{base: '100%', lg: '33%'}}>
          <label
            style={{fontSize: '16px', color: '#151875', width: '40%'}}
            id="sort-page"
          >
            Sort by:
          </label>
          <Select
            borderRadius="none"
            color="description"
            fontSize="12px"
            h="25px"
            id="sort-page"
            ml="8px"
            w="60%"
            maxW="120px"
          >
            <option value="best-match" selected>
              Best match
            </option>
            {/* TODO adicionar os melhores avaliados no 'best match'*/}
            <option value="lower-price">Lower Prices</option>
            <option value="higher-price">Higher Prices</option>
            <option value="bigger-discounts">Bigger Discounts</option>
          </Select>
        </Flex>
        <Flex w={{base: '100%', lg: '33%'}} align="center">
          <Flex align="center" gap="5px" w="40%">
            <label style={{fontSize: '16px', color: '#151875'}} id="view-way">
              View:
            </label>
            <IoGridSharp color="#151875" size="12px" />
            <IoListSharp color="#151875" />
          </Flex>
          <Input
            borderRadius="none"
            color="navyBlue"
            fontSize="12px"
            h="25px"
            id="view-way"
            max="20"
            maxW="200px"
            min="0"
            ml="8px"
            w="60%"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
