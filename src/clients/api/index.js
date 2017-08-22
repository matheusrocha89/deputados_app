import axios from 'axios';

import { API_BASE_URL } from '../../config';


class ApiClient {
  constructor() {
    this.clientInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 5000,
    });
  }

  get(url, options = null) {
    return this.clientInstance.get(url, options);
  }
}

const apiClient = new ApiClient();


export default apiClient;
