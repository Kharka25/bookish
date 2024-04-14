import messaging from '@react-native-firebase/messaging';

import {request} from '@config/api';
import {RequestMethodEnum} from '@customTypes/request.types';
import {END_POINTS} from '@config/endpoints';
import {Keys} from '@customTypes/keys.types';
import {getFromAsyncStorage, saveToAsyncStorage} from '@utils/cache';
import {fetchAuthInfo} from './auth';

export async function getFcmToken() {
  let token = await getFromAsyncStorage(Keys.FCM_TOKEN);

  if (!token) {
    token = await messaging().getToken();
    saveToAsyncStorage(Keys.FCM_TOKEN, token);
  }
  return token;
}

export async function registerDeviceNotification() {
  const token = await getFcmToken();
  const {profile} = await fetchAuthInfo();

  console.log(token, 'fcmToken');

  await request({
    endPoint: END_POINTS.REGISTER_NOTIFICATION,
    methodType: RequestMethodEnum.POST,
    data: {token, userId: profile?.id},
  });
}
