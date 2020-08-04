import axios from 'axios';
const instance = axios.create({
    baseURL: '/Applicants'
});


export default instance;
