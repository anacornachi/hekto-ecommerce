import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, verifique se o e-mail é válido.')
    .required('O email é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export const loginResolver = yupResolver(validationSchema);
