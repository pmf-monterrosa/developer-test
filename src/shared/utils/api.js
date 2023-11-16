import axios from 'axios';
import { notification } from 'antd';

const openNotification = (message, description) => {
  notification.open({
    message,
    description,
    warning: true,
  });
};

const api = axios.create({
  baseURL: 'https://auto-pay-api-sgiognjnfa-uc.a.run.app/', 
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response, message } = error;
    if (response) {
      const { data } = response;
      const errorMessage = data.message || 'Error';
      openNotification('API Error', errorMessage);
    } else if (message === 'Network Error') {
      openNotification('Network Error', 'Please check your internet connection');
    } else {
      openNotification('Error', 'An error occurred. Please try again later');
    }

    return Promise.reject(error);
  }
);

export default api;