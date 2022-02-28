import api from './api';

export const signIn = async ({email, password}: TCredentials) => {
  const {data} = await api.post('/login', {email, password});

  return data;
};
