import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
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
  const {formState, register} = useFormContext();

  const {errors} = formState;
  const error = errors[name];

  return (
    <FormControl isInvalid={Boolean(error)} mb={error ? '10px' : 0}>
      <InputGroup>
        <Input
          {...props}
          variant={variant ?? 'outlineInput'}
          {...register(name)}
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
