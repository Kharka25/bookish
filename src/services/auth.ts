import {request} from '@config/api';
import {RequestMethodEnum} from '@customTypes/request.types';

async function fetchAuthInfo() {
  try {
    const data = await request({
      endPoint: 'users/auth/is-auth',
      methodType: RequestMethodEnum.GET,
    });
    return data;
  } catch (error) {
    console.log(error, 'HERE!!');
  }
}

export {fetchAuthInfo};
