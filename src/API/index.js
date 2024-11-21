import axios from 'axios'; // we setup this first after install

const instance = axios.create({
  baseURL: 'https://pets-react-query-backend.eapi.joincoded.com',
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;