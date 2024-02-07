import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveToAsyncStorage(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

async function getFromAsyncStorage(key: string) {
  return await AsyncStorage.getItem(key);
}

async function clearAsyncStorage() {
  await AsyncStorage.clear();
}

export {clearAsyncStorage, getFromAsyncStorage, saveToAsyncStorage};
