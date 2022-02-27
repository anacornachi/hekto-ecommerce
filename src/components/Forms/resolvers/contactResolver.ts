import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object()
  .shape({
    name: Yup.string()
    .required('This field is required.'),
    email: Yup.string()
      .email('Please, check if the email is valid')
      .required('Email is required.'),
    subject: Yup.string().required('This field is required.'),
    message: Yup.string().required('This field is required.'),
  })
  .required();

export const contactResolver = yupResolver(validationSchema);
