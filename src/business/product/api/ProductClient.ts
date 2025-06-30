import axios from 'axios';

const productClient = axios.create({
    baseURL: 'https://backendinventory.shop:8443/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default productClient;
