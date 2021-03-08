import axios from 'axios';

const username = localStorage.getItem('username');
const access_token = localStorage.getItem('token');

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
    if (username) {
        config.headers.common.username = username;
        config.headers.common.access_token = access_token;
    }
    return config;
});

// instance.interceptors.response.use(
//     function (response) {
//         console.log('>>>>>> API CALL: ', response.config.url);
//         console.log(response.data)
//         return Promise.resolve(response.data);
//     },
//     function (error) {
//         console.log('>>>>>> API CALL: ', error.response.config.url);
//         return Promise.resolve(error.response.data.message);
//     }
// );

export default instance;
