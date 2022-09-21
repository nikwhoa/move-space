/* eslint-disable no-param-reassign */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5009/api',
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance;
