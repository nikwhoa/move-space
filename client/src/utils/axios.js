/* eslint-disable no-param-reassign */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5100/api',
    // baseURL: 'https://91.219.62.242:5100/api/',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance;
