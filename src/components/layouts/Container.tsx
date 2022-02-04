import {Box, BoxProps} from '@chakra-ui/react';
import {ReactNode} from 'react';

export type ContainerProps = {
  children: ReactNode;
} & BoxProps;

export default function Container(props: ContainerProps) {
  return (
    <>
      <Box {...props} width="100%" maxWidth="1400px" margin="0 auto">
        {props.children}
      </Box>
    </>
  );
}
