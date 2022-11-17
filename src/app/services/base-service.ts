import axios, { AxiosRequestConfig } from 'axios';
import { ErrorReason } from '../enums/error-reason';
import { getAuthToken } from '../utils';

abstract class BaseService {
  async getHeaders(): Promise<AxiosRequestConfig> {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    return config;
  }

  getBaseUrl() {
    return process.env.REACT_APP_API_URL;
  }

  getAuthToken() {
    const token = getAuthToken();

    const extraOptions: AxiosRequestConfig = {
      headers: {
        Authorization: `${token}`
      }
    };

    return extraOptions;
  }

  handleError(rejectHandler: any, error: any, defaultMessage: string) {
    let { response } = error;

    if (!response || !response.data) {
      response = {
        ...response,
        data: {
          reason: ErrorReason.Failure,
          messages: []
        }
      };

      if (!error.response) {
        response.data.messages.push('Cannot connect to server.');
      } else if (error.response.status === '401' || error.response.status === '403') {
        response.data.reason = ErrorReason.AccessDenied;
        response.data.messages.push('Access denied.');
      } else {
        response.data.messages.push(defaultMessage);
      }
    }

    if (!response.data.messages) {
      response.data.messages = [];
    }

    if (!response.data.reason) {
      response.data.reason = ErrorReason.Failure;
    }

    rejectHandler(response.data);
  }

  async get<T>(
    path: string,
    extraOptions?: AxiosRequestConfig,
    invoking3rdPartyService: boolean = false
  ) {
    const options = { ...(await this.getHeaders()), ...extraOptions };

    const url = invoking3rdPartyService ? path : this.getBaseUrl() + path;

    // eslint-disable-next-line
    return new Promise<T>((resolve, reject) => {
      axios
        .get<T>(url, options)
        .then(response => resolve(response.data))
        .catch(error => {
          console.error(error);
          reject();
        });
    });
  }

  async post<T>(path: string, data: any, extraOptions?: AxiosRequestConfig) {
    const options = { ...(await this.getHeaders()), ...extraOptions };

    const url = this.getBaseUrl() + path;

    return new Promise<T>((resolve, reject) => {
      axios
        .post<T>(url, data, options)
        .then(response => resolve(response.data))
        .catch(error => {
          this.handleError(reject, error, 'Operation failed.');
        });
    });
  }

  async postFile<T>(path: string, data: any, extraOptions?: AxiosRequestConfig) {
    const url = this.getBaseUrl() + path;

    return new Promise<T>((resolve, reject) => {
      axios
        .post<T>(url, data, extraOptions)
        .then(response => resolve(response.data))
        .catch(error => {
          this.handleError(reject, error, 'Operation failed.');
        });
    });
  }

  async put<T>(path: string, data: any, extraOptions?: AxiosRequestConfig) {
    const options = { ...(await this.getHeaders()), ...extraOptions };

    const url = this.getBaseUrl() + path;

    // eslint-disable-next-line
    return new Promise<T>((resolve, reject) => {
      axios
        .put<T>(url, data, options)
        .then(response => resolve(response.data))
        .catch(error => {
          console.error(error);
        });
    });
  }

  async patch<T>(path: string, data: any, extraOptions?: AxiosRequestConfig) {
    const options = { ...(await this.getHeaders()), ...extraOptions };

    const url = this.getBaseUrl() + path;

    // eslint-disable-next-line
    return new Promise<T>((resolve, reject) => {
      axios
        .patch<T>(url, data, options)
        .then(response => resolve(response.data))
        .catch(error => {
          console.error(error);
        });
    });
  }

  async delete<T>(path: string, extraOptions?: AxiosRequestConfig) {
    const options = { ...(await this.getHeaders()), ...extraOptions };

    const url = this.getBaseUrl() + path;

    // eslint-disable-next-line
    return new Promise<T>((resolve, reject) => {
      axios
        .delete<T>(url, options)
        .then(response => resolve(response.data))
        .catch(error => {
          console.error(error);
        });
    });
  }
}

export default BaseService;
