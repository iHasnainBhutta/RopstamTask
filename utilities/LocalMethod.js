import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getData(key, parse = false) {
  const data = await AsyncStorage.getItem(key);

  console.log(data);

  return parse && data ? JSON.parse(data) : data;
}
export async function setData(key, data, isSringify = false) {
    // console.log(">",data);

  const _data = isSringify ? JSON.stringify(data) : data;
  return await AsyncStorage.setItem(key, _data);
}
