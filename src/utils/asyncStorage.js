import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setToken(token) {
  try {
    let token_Key = null;
    await AsyncStorage.setItem('token_Key', token).then(x =>
      AsyncStorage.getItem('token_Key').then(val => {
        token_Key = val ? val : null;
      }),
    );
    return token_Key;
  } catch (e) {
    //console.log(e);
  }
}

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem('token_Key');
    if (token !== null) return token;
    else return null;
  } catch (e) {
    //console.log(e);
  }
}

export async function removeToken() {
  try {
    await AsyncStorage.removeItem('token_Key');
  } catch (e) {
    //console.log(e);
  }
}

export async function setLang(lang) {
  try {
    let lang_Key = null;
    await AsyncStorage.setItem('lang_Key', lang).then(x =>
      AsyncStorage.getItem('lang_Key').then(val => {
        lang_Key = val ? val : null;
      }),
    );
    return lang_Key;
  } catch (e) {
    //console.log(e);
  }
}

export async function getLang() {
  try {
    const lang_Key = await AsyncStorage.getItem('lang_Key');
    if (lang_Key !== null) return lang_Key;
    else return null;
  } catch (e) {
    //console.log(e);
  }
}

export async function removeLang() {
  try {
    await AsyncStorage.removeItem('lang_Key');
  } catch (e) {
    //console.log(e);
  }
}

export async function setUser(userData) {
  try {
    let DataUser = null;
    await AsyncStorage.setItem('user', userData).then(x =>
      AsyncStorage.getItem('user').then(val => {
        DataUser = val ? val : null;
      }),
    );
    return DataUser;
  } catch (e) {
    //console.log(e);
  }
}

export async function getUser() {
  try {
    const DataUser = await AsyncStorage.getItem('user');
    if (DataUser !== null) return DataUser;
    else return null;
  } catch (e) {
    //console.log(e);
  }
}

export async function removeUser() {
  try {
    await AsyncStorage.removeItem('user');
  } catch (e) {
    //console.log(e);
  }
}

export async function setShopId(branchData) {
  try {
    let DataBranch = null;
    await AsyncStorage.setItem('shopId', branchData).then(x =>
      AsyncStorage.getItem('shopId').then(val => {
        DataBranch = val ? val : null;
      }),
    );
    return DataBranch;
  } catch (e) {
    //console.log(e);
  }
}

export async function getShopId() {
  try {
    const DataBranch = await AsyncStorage.getItem('shopId');
    if (DataBranch !== null) return DataBranch;
    else return null;
  } catch (e) {
    //console.log(e);
  }
}

export async function removeShopId() {
  try {
    await AsyncStorage.removeItem('shopId');
  } catch (e) {
    //console.log(e);
  }
}

export async function setShopName(branchData) {
  try {
    let DataBranch = null;
    await AsyncStorage.setItem('shopName', branchData).then(x =>
      AsyncStorage.getItem('shopName').then(val => {
        DataBranch = val ? val : null;
      }),
    );
    return DataBranch;
  } catch (e) {
    //console.log(e);
  }
}

export async function getShopName() {
  try {
    const DataBranch = await AsyncStorage.getItem('shopName');
    if (DataBranch !== null) return DataBranch;
    else return null;
  } catch (e) {
    //console.log(e);
  }
}

export async function removeShopName() {
  try {
    await AsyncStorage.removeItem('shopName');
  } catch (e) {
    //console.log(e);
  }
}
