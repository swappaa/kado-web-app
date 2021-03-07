import axios from 'axios';

const queryParams = 'maryapick';
const tokens = 'eyJraWQiOiJMTVhYTUxFM1ZVOHg5MTh4WEx0cEVmWjdmbnVJYmJEaHlXcmRPeVR5aGtFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5MmQ4MWU4MS05YmIzLTQ2NWQtOWUyMi01NTAyNWU0MmU3N2QiLCJldmVudF9pZCI6IjliMDIwOWVlLTY0YWEtNGQxZi1iNDA0LWZmZjUxMjlhMDhiNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTUwODQ1OTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX1RHZHNqS2dSVCIsImV4cCI6MTYxNTE3MDk5NCwiaWF0IjoxNjE1MDg0NTk0LCJqdGkiOiJlOThlYTAzNi1lZDM0LTQyNjEtYjJlZi1lYjgzNTAzOWJhMTkiLCJjbGllbnRfaWQiOiIzcXV2MmJkNXFqNGQzNG9xaTExdW9zdGlrNiIsInVzZXJuYW1lIjoidGFsZW50X3Rlc3QifQ.kEgytGydfJJUKelJZXyA-3oPIZrl6gJYHGBPW1b75HIYXs3dHd3JHM2LD_t3G8A_fSOKmecokoO9YrCHS7cxdr1UR5X_Ql1Q0zZdMKTEIK7JhRXQjqtnnT1P2V6nPzlYEaRLF6BtEhJcPZfh1Z79ldCoDoLJRGJu_2dx59gVCyyG88zj_PbdfP5WhG7aRFj0gGZ0czkRtu6P0X-q8Zu7kAGveYPmZzb2CgSg9KAI369P5WTLdeMosl0I6YrgNWWCSNvMBt3IGsJ3Hv3fmL8EpQpNcMswtkRCYB0GJwX4TXhclIAW5Gc-1vkq8ltB7SkZbRgXZv2gx8r1ILip0Xl2GA';

const instance = axios.create({
    baseURL: 'https://atln2zned9.execute-api.us-west-2.amazonaws.com/dev/',
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
        config.headers.common.access_token = tokens;
    }
    return config;
});

axios.interceptors.response.use(
    function (response) {
        console.log('>>>>>> API CALL: ', response.config.url);
        // console.log('>>>>>> RESPONSE: ', response.data);
        return Promise.resolve(response.data);
    },
    function (error) {
        console.log('>>>>>> API CALL: ', error.response.config.url);
        // console.log('>>>>>> ERROR: ', error.response.data);
        return Promise.resolve(error.response.data.message);
    }
);

export default instance;