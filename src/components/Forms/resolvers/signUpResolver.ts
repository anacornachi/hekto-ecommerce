import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Needs at least 2 characters')
    .required('This field is required.'),
  lastName: Yup.string()
    .min(2, 'Needs at least 2 characters')
    .required('This field is required.'),
  email: Yup.string()
    .email('Please, check if the email is valid')
    .required('Email is required.'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password needs at least 8 digits'),
  passwordConfirmation: Yup.string()
    .required('This field is required.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const signUpResolver = yupResolver(validationSchema);
