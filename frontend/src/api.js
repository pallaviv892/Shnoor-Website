import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
});
export const submitContact = (data) => API.post('/contact', data);
export const submitApplication = (data) => API.post('/careers/apply', data);
export const getJobs = () => API.get('/careers/jobs');
export const getNews = () => API.get('/news');
export const getArticle = (slug) => API.get(`/news/${slug}`);
export const subscribeNewsletter = (email) => API.post('/newsletter', { email });

export default API;
