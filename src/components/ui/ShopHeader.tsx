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
      direction={{base: 'column', md: 'row'}}
      w="100%"
      gap={{base: '55px', md: '0'}}
    >
      <Flex w={{base: '100%', md: '50%'}} direction="column">
        <Heading as="h1" fontFamily="josefin" color="navyBlue" fontSize="22px">
          Ecommerce Accessories & Fashion Items
        </Heading>
        <Text color="#8A8FB9" fontSize="12px">
          {`About ${value} results (${time} seconds)`}
        </Text>
      </Flex>
      <Flex
        gap="30px"
        w={{base: '100%', md: '50%'}}
        justify={{base: 'start', md: 'end'}}
        direction={{base: 'column', md: 'row'}}
      >
        <Flex align="center">
          <label
            style={{fontSize: '16px', color: '#151875'}}
            id="view-per-page"
          >
            Per Page:
          </label>
          <Input
            type="number"
            min="0"
            w="55px"
            ml="8px"
            h="25px"
            max="20"
            id="view-per-page"
            color="navyBlue"
            borderRadius="none"
            textAlign="center"
          />
        </Flex>
        <Flex align="center">
          <label style={{fontSize: '16px', color: '#151875'}} id="sort-page">
            Sort by:
          </label>
          <Select
            borderRadius="none"
            color="description"
            id="sort-page"
            w="60%"
            ml="8px"
            fontSize="12px"
            h="25px"
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
        <Flex align="center" gap="5px">
          <label style={{fontSize: '16px', color: '#151875'}} id="view-way">
            View:
          </label>
          <IoGridSharp color="#151875" size="12px" />
          <IoListSharp color="#151875" />
          <Input
            min="0"
            w="200px"
            ml="8px"
            h="25px"
            max="20"
            id="view-way"
            color="navyBlue"
            borderRadius="none"
            fontSize="12px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
