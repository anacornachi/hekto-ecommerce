import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';

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
  const {formState, register, setValue, trigger} = useFormContext();

  const {errors, dirtyFields} = formState;
  const error = errors[name];

  return (
    <FormControl isInvalid={Boolean(error)} mb={error ? '10px' : 0}>
      <InputGroup>
        <Input
          {...props}
          variant={variant ?? 'outlineInput'}
          {...register(name)}
          onChangeCapture={async () => {
            const isValid = await trigger(name);
            if (!isValid) {
              await trigger(name);
            }
          }}
          onBlur={(event) => {
            const {value} = event.target;
            setValue(name, value);
          }}
        />
      </InputGroup>
      <FormErrorMessage
        fontSize={{base: 'xs', lg: 'sm'}}
        mt="4px"
        color="pink"
        position="absolute"
      >
        {String(error?.message)}
      </FormErrorMessage>
    </FormControl>
  );
}
