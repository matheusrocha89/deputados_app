import axios from 'axios';

import { API_BASE_URI } from '../../config';


class ApiClient {
  constructor() {
    this.clientInstance = axios.create({
      baseURL: API_BASE_URI,
      timeout: 5000,
    });
  }

  get(url, options = null) {
    return this.clientInstance.get(url, options);
  }
}

const clientApi = new ApiClient();


export default clientApi;
