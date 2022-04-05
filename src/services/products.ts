import api from './api';

export const getAllProducts = async () => {
  const {data} = await api.get('http://localhost:3001/products');
  return data as TProduct[];
};

export const getProductBySlug = async (slug: string) => {
  const {data} = await api.get(`http://localhost:3001/products/${slug}`);
  return data as TProduct;
};
