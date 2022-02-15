import {FormControl, Input, InputGroup, InputProps} from '@chakra-ui/react';
import React from 'react';

export type Props = {
  name: string;
  placeHolderText?: string;
  variant?: string;
} & InputProps;

export default function CustomInput({
  name,
  placeHolderText,
  variant,
  ...props
}: Props) {
  return (
    <FormControl>
      <InputGroup>
        <Input {...props} variant={variant ?? 'outlineInput'} />
      </InputGroup>
    </FormControl>
  );
}
