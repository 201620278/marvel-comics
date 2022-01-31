import axios from 'axios';
import md5 from 'md5';

const publicKey = '8ac43f120c32f02ff4448d4e6739c1e7';
const privateKey = 'aa9c8f38bbfb61f8cc48151be2e16d824594ac60';

const time = Number(new Date());

const hash = publicKey && privateKey ? md5(time + privateKey + publicKey) : '';

export const authKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default api;
