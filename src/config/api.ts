import Axios, {CreateAxiosDefaults} from 'axios';

import {RequestConfig, RequestMethodEnum} from '@customTypes/request.types';
import {getFromAsyncStorage} from '@utils/cache';
import {Keys} from '@customTypes/keys.types';

type headers = CreateAxiosDefaults<any>['headers'];

const BASE_URL = '';

const requestClient = async (headers?: headers) => {
  const token = await getFromAsyncStorage(Keys.AUTH_TOKEN);

  if (!token) {
    return Axios.create({baseURL: BASE_URL});
  }

  const defaultHeaders = {
    Authorization: `Bearer ${token}`,
    ...headers,
  };

  return Axios.create({baseURL: BASE_URL, headers: defaultHeaders});
};

export async function request<T>(requestData: RequestConfig<T>) {
  const ApiIntegration = await requestClient();
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
