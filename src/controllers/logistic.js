import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL, PATH, PAGESIZE} from '../constants/config';
import {getShopId, get} from '../utils/asyncStorage';

export async function getListLogisticType({page}, resultHandle, errorHandle) {
  console.log(
    `${API_URL.logistic}${PATH}/logistic-types?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt`,
  );
  try {
    const {status, data} = await axios.get(
      `${API_URL.logistic}${PATH}/logistic-types?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt`,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}
