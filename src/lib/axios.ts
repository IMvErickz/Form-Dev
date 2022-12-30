import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://us-east.connect.psdb.cloud/formdev?sslaccept=strict'
})