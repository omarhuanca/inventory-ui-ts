import axios from 'axios';

export const lineClient = axios.create({
    baseURL: "http://91.108.126.99:8080/v1/lines"
})
