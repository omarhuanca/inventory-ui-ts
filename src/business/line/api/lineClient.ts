import axios from 'axios';

export const lineClient = axios.create({
    baseURL: "https://backendinventory.shop:8443/v1/lines"
})
