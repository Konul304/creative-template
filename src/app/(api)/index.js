import axios from 'axios';

export const axiosTemplate = axios.create({
  baseURL: 'http://172.16.10.132:8080/api',
});
