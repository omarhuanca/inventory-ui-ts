import axios from 'axios';

export const coinClient = axios.create({
    baseURL: "https://backendinventory.shop:8443/v1/coins"
})
