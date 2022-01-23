import axios from 'axios';

const host = 'http://localhost:3000/';

export const GetProducts = () => axios.get(`${host}products?_limit=10&_page=0`);
