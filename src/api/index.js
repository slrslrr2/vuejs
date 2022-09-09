import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  // 아래 내용은 데이터를 요청할 때마다, 아래 값들이 붙어 요청된다.
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
