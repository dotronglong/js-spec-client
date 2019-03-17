import axios from 'axios';
import Transporter from '../transporter';

export default class AxiosTransporter implements Transporter {
  delete(url: string, headers?: object): Promise<object> {
    return axios.delete(url, {
      headers: headers || {}
    });
  }

  get(url: string, headers?: object): Promise<object> {
    return axios.get(url, {
      headers: headers || {}
    });
  }

  patch(url: string, body?: object, headers?: object): Promise<object> {
    return axios.patch(url, body, {
      headers: headers || {}
    });
  }

  post(url: string, body?: object, headers?: object): Promise<object> {
    return axios.post(url, body, {
      headers: headers || {}
    });
  }

  put(url: string, body?: object, headers?: object): Promise<object> {
    return axios.put(url, body, {
      headers: headers || {}
    });
  }
}