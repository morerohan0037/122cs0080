// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchTopUsers = () => API.get('/users/top-users');
export const fetchTrendingPosts = () => API.get('/posts/trending');
export const fetchLatestPosts = () => API.get('/posts/latest');
