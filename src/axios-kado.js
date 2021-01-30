import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://adh4km0r5g.execute-api.us-west-2.amazonaws.com/dev'
})

export default instance;