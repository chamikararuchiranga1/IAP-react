import axios from "axios";

const instance = axios.create({
    baseURL: 'https://student-api.acpt.lk',
    // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;