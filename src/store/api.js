import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://conduit.productionready.io/api'
});

// set auth token in case of a login or signup
export function setToken(jwt) {
    api.defaults.headers.common['Authorization'] = `Token ${jwt}`;
}

// remove auth token in case of a logout or new login 
export function clearToken() {
    delete api.defaults.headers.common['Authorization'];
}