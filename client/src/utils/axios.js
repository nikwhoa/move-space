/* eslint-disable no-param-reassign */
import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_URL,
    // baseURL: 'http://91.219.62.242:5100/api/',
    // http://91.219.62.242:5100/api/classes/get

});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
});

export default instance;
