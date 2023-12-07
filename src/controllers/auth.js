import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL, PATH} from '../constants/config';

export async function signin({username, password}, resultHandle, errorHandle) {
  try {
    if (username == '') return errorHandle(404, `กรุณากรอก Email`);
    if (password == '') return errorHandle(404, `กรุณากรอกรหัสผ่าน`);
    const results = await axios.post(
      `${API_URL.shop}/login`,
      {username: username, password: password},
      {
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );
    return resultHandle(results);
  } catch (error) {
    // if (error.response) {
    //   console.log('Error data : ', error.response.data);
    //   console.log('Error Status :', error.response.status);
    //   console.log('Error header :', error.response.headers);
    // } else if (error.request) {
    //   console.log('Error req : ', error.request);
    // } else {
    //   console.log('Error', error.message);
    // }
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function refreshToken(
  {accountId, shopId},
  resultHandle,
  errorHandle,
) {
  try {
    const results = await axios.post(
      `${API_URL.shop}/refresh-token`,
      {accountId: accountId, shopId: shopId},
      {
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );
    return resultHandle(results);
  } catch (error) {
    // if (error.response) {
    //   console.log('Error data : ', error.response.data);
    //   console.log('Error Status :', error.response.status);
    //   console.log('Error header :', error.response.headers);
    // } else if (error.request) {
    //   console.log('Error req : ', error.request);
    // } else {
    //   console.log('Error', error.message);
    // }
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function register(
  {username, password, phone, confirmPassword, token},
  resultHandle,
  errorHandle,
) {
  try {
    const results = await axios.post(
      `${API_URL.shop}/register`,
      {
        username: username,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword,
        token: token,
      },
      {
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );
    return resultHandle(results);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function forgotPassword({email}, resultHandle, errorHandle) {
  try {
    const results = await axios.post(
      `${API_URL.shop}/forgot-password`,
      {
        email: email,
      },
      {
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/json; charset=utf-8',
        },
      },
    );
    return resultHandle(results);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}
