import axios from 'axios';

export const axiosTemplate = axios.create({
  baseURL: 'https://sec2-web.eynullabeyli.com/api/',
});
