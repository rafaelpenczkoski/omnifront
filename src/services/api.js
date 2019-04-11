import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackapi.herokuapp.com',
});

export default api;