import {Circle, Flex, Heading, Text} from '@chakra-ui/react';
import {type} from '@testing-library/user-event/dist/type';
import convertToUSD from '@utils/ConvertToUSD';

import Image from 'next/image';
import {useState} from 'react';

import Actions from './Actions';
import Featured from './variants/Featured';
import Grid from './variants/Grid';
import Latest from './variants/Latest';
import Top from './variants/Top';
import Trending from './variants/Trending';

export type Props = {
  data: TProduct;
  variant: string;
};

export default function ProductCard({data, variant}: Props) {
  switch (variant) {
    case 'featured':
      return <Featured data={data} />;
    case 'grid':
      return <Grid data={data} />;
    case 'latest':
      return <Latest data={data} />;
    case 'trending':
      return <Trending data={data} />;
    case 'top':
      return <Top data={data} />;
    default:
      break;
  }
}
