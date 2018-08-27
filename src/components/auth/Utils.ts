import axios from 'axios';

export const getUserInfo = (id: string) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
