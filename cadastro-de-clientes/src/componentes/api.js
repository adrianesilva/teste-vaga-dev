import axios from 'axios';

const api = axios.create({
    baseURL: 'http://dev.localhost/'
});


export default api;