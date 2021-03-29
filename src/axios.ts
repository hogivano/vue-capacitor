import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:1337';
export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': '*/*',
  },
});
