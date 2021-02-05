import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://y6vlqlglfa.execute-api.us-west-2.amazonaws.com/dev'
})

export default instance;