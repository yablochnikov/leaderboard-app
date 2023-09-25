import axios from 'axios';

const axiosConfig = {
  baseURL: 'http://coding-test.cube19.io/frontend/v1',
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    if (error.response.status === 500) {
      return instance.get(error.config.url);
    }
    return Promise.reject(error);
  },
);

export default instance;
