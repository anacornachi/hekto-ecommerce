import {capitalize} from '@utils/capitalize';
import api from './api';

export const authenticate = async ({email, password}: TCredentials) => {
  const {data} = await api.post('/login', {email, password});

  return data;
};

export const signUp = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}: TNewUser) => {
  const {data} = await api.post('/register', {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  });

  return data;
};
