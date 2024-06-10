export const Configuration = axios.create({
    baseURL: 'https://user-modue.onrender.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });