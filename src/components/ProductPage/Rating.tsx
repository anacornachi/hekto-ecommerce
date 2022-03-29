import {Flex, Text} from '@chakra-ui/react';
import calculateAverage from '@utils/calculateAverage';
import React from 'react';
import {AiFillStar} from 'react-icons/ai';

type Props = {
  array: number[];
};

export default function Rating({array}: Props) {
  const average = calculateAverage(array);
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <Flex align="center">
        {stars.map((star, index) => {
          index += 1;
          return (
            <AiFillStar
              key={index}
              fill={index >= average ? 'gray' : '#FFC416'}
            />
          );
        })}
        <Text ml="3px" fontFamily="josefin" color="navyBlue">
          ({array.length})
        </Text>
      </Flex>
    </>
  );
}
