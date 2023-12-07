import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL, PATH, PAGESIZE} from '../constants/config';
import {getShopId, get} from '../utils/asyncStorage';

export async function getListShops({page}, resultHandle, errorHandle) {
  try {
    const {status, data} = await axios.get(
      `${API_URL.shop}${PATH}/shops?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt`,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function getShopsById({shopId}, resultHandle, errorHandle) {
  console.log(`${API_URL.shop}${PATH}/shops/${shopId}`);
  try {
    const {status, data} = await axios.get(
      `${API_URL.shop}${PATH}/shops/${shopId}`,
    );
    console.log(data);
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function uploadProfile({files}, resultHandle, errorHandle) {
  console.log('DATA FILE : ', files);
  let formData = new FormData();
  formData.append('folder', 'shop');
  formData.append('files', files);

  try {
    const {status, data} = await axios.post(
      `${API_URL.shop}${PATH}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
      },
    );
    return resultHandle(data);
  } catch (error) {
    console.log(error.response.data.message);
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function createShop(payload, resultHandle, errorHandle) {
  try {
    const {status, data} = await axios.post(
      `${API_URL.shop}${PATH}/shops`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function pathShopsById(
  {shopId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.patch(
      `${API_URL.shop}${PATH}/shops/${shopId}`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function getListShopsBank(
  {shopId, page},
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.get(
      `${API_URL.shop}${PATH}/shops/${shopId}/banks?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt`,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function createShopBank(
  {shopId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.post(
      `${API_URL.shop}${PATH}/shops/${shopId}/banks`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function updateShopBank(
  {shopId, bankId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.patch(
      `${API_URL.shop}${PATH}/shops/${shopId}/banks/${bankId}`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function getListShopAddress(
  {shopId, page, addressType},
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.get(
      `${API_URL.shop}${PATH}/shops/${shopId}/addresses?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt&type=${addressType}`,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function createShopAddress(
  {shopId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.post(
      `${API_URL.shop}${PATH}/shops/${shopId}/addresses`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function updateShopAddress(
  {shopId, addressId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.patch(
      `${API_URL.shop}${PATH}/shops/${shopId}/addresses/${addressId}`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function getRole({page}, resultHandle, errorHandle) {
  try {
    const {status, data} = await axios.get(
      `${API_URL.shop}${PATH}/roles?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt`,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function getListShopTeam(
  {shopId, page},
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.get(
      `${API_URL.shop}${PATH}/shops/${shopId}/teams?page=${page}&pageLimit=${PAGESIZE}&sort=DESC&sortBy=CreatedAt`,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function createShopTeam(
  {shopId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.post(
      `${API_URL.shop}${PATH}/shops/${shopId}/teams`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}

export async function updateShopTeam(
  {shopId, teamId},
  payload,
  resultHandle,
  errorHandle,
) {
  try {
    const {status, data} = await axios.patch(
      `${API_URL.shop}${PATH}/shops/${shopId}/teams/${teamId}`,
      payload,
    );
    return resultHandle(data);
  } catch (error) {
    const {code, message} = error.response.data;
    return errorHandle(code, message);
  }
}
