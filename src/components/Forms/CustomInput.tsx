import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';

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
  const [showPassword, setShowPassword] = useState(false);

  const {formState, register} = useFormContext();

  const {errors} = formState;
  const error = errors[name];

  return (
    <FormControl isInvalid={Boolean(error)} mb={error ? '10px' : 0}>
      <InputGroup>
        <Input
          {...props}
          type={
            props.type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : undefined
          }
          px="16px"
          pr={props.type === 'password' ? '15%' : '16px'}
          variant={variant ?? 'outlineInput'}
          {...register(name)}
        />
      </InputGroup>
      {props.type === 'password' ? (
        <InputRightElement>
          <Button
            h="30px"
            w="100%"
            mt="25px"
            size="lg"
            bg="none"
            p="0"
            _focus={{boxShadow: 'none', bg: 'none'}}
            _hover={{bg: 'none'}}
            _active={{bg: 'none'}}
            onMouseDown={() => setShowPassword(!showPassword)}
            onMouseUp={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </Button>
        </InputRightElement>
      ) : (
        <></>
      )}
      <FormErrorMessage
        fontSize={{base: 'xs', lg: 'sm'}}
        mt="4px"
        color="pink"
        position="absolute"
        id={`error-message-${name}`}
      >
        {String(error?.message)}
      </FormErrorMessage>
    </FormControl>
  );
}
