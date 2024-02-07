import Axios from 'axios';

import {RequestMethod, RequestMethodEnum} from '@customTypes/request.types';
import {getFromAsyncStorage} from '@utils/cache';
import {Keys} from '@customTypes/keys.types';

const BASE_URL = '';

const ApiIntegration = Axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

ApiIntegration.interceptors.request.use(async (config: any) => {
  const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);
  const newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return newConfig;
});

export async function request<T>(requestData: RequestMethod<T>) {
  try {
    let res;
    switch (requestData.methodType) {
      case RequestMethodEnum.POST:
        res = await ApiIntegration.post(requestData.endPoint, requestData.data);
        return res.data;
      case RequestMethodEnum.GET:
        res = await ApiIntegration.get(requestData.endPoint);
        return res.data;
      case RequestMethodEnum.PUT:
        res = await ApiIntegration.put(requestData.endPoint, requestData.data);
        return res.data;
      case RequestMethodEnum.DELETE:
        res = await ApiIntegration.delete(requestData.endPoint);
    }
  } catch (error) {
    throw error;
  }
}
