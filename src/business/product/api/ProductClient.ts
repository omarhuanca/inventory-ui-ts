import axios from 'axios';

const productClient = axios.create({
    baseURL: 'https://backendinventory.shop:8443/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default productClient;
