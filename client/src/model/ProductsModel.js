import axios from 'axios';

const api = 'http://localhost:3000/';

export const GetProducts = (field) => axios.get(`${api}${field}`);

export const SendCheck = (body) => axios.post(`${api}writingOff`, body);
