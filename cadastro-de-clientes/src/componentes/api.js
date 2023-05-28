import axios from 'axios';

const api = axios.create({
    baseURL: 'http://dev.localhost/cadastro-de-clientes/flight-php/api/'
});


export default api;