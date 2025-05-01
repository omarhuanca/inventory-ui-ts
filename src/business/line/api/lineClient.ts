import axios from 'axios';

export const lineClient = axios.create({
    baseURL: "https://91.108.126.99:8080/v1/lines"
})
