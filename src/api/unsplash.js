import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID hJzbYF3eSrYR5vP9rBK_VObeFB6y9JaTgbhsFIcLxio'
    }
});