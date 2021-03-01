import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://atln2zned9.execute-api.us-west-2.amazonaws.com/dev/'
});

export default instance;