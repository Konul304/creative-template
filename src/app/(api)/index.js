import axios from 'axios';

export const axiosTemplate = axios.create({
  baseURL: 'https://sec2-admin-api-test.eynullabeyli.com/api/',
});
