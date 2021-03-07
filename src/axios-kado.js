import axios from 'axios';

const queryParams = 'maryapick';
const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'https://atln2zned9.execute-api.us-west-2.amazonaws.com/dev/'
});

instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers['Content-Type'] = 'multipart/form-data';
instance.interceptors.request.use(async function (config) {
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    config.headers.common['Access-Control-Allow-Headers'] = 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token';
    config.headers.common['Access-Control-Allow-Credentials'] = true;
    config.headers.common['Access-Control-Allow-Method'] = 'OPTIONS,POST,GET';
    config.headers.common['Content-Type'] = 'application/json';
    if (queryParams) {
        config.headers.common.username = queryParams;
        config.headers.common.access_token = token;
    }
    return config;
});

instance.interceptors.response.use(
    function (response) {
        console.log('>>>>>> API CALL: ', response.config.url);
        return Promise.resolve(response.data);
    },
    function (error) {
        console.log('>>>>>> API CALL: ', error.response.config.url);
        return Promise.resolve(error.response.data.message);
    }
);

export default instance;
