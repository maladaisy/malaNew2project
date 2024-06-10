const Configuration1 = axios.create({
    baseURL: 'https://products-rkli.onrender.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });