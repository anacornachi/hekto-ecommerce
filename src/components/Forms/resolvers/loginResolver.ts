import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object()
  .shape({
    email: Yup.string()
      .email('Please, check if the email is valid.')
      .required('Email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password needs at least 8 digits'),
  })
  .required();

export const loginResolver = yupResolver(validationSchema);
