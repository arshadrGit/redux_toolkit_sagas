import API from './Api';

export const getProducts = () => {
  return API.get(`https://dummyjson.com/products`);
};
export const addProduct = params => {
  return API.post(`https://dummyjson.com/products/add`, params);
};