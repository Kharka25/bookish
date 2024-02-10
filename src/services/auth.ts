import {request} from '@config/api';
import {RequestMethodEnum} from '@customTypes/request.types';
import {END_POINTS} from '@config/endpoints';

import {
  SignupDataI,
  SigninDataI,
  VerifyEmailDataI,
} from '@customTypes/request.types';

async function signUp(authData: SignupDataI) {
  try {
    const data = await request({
      endPoint: END_POINTS.SIGN_UP,
      methodType: RequestMethodEnum.POST,
      data: authData,
    });
    return data;
  } catch (error) {
    console.log('Sign up error: ', error);
  }
}

async function signIn(authData: SigninDataI) {
  try {
    const data = await request({
      endPoint: END_POINTS.SIGN_IN,
      methodType: RequestMethodEnum.POST,
      data: authData,
    });
    return data;
  } catch (error) {
    console.log('Sign in error: ', error);
  }
}

async function fetchAuthInfo() {
  try {
    const data = await request({
      endPoint: END_POINTS.FETCH_AUTH,
      methodType: RequestMethodEnum.GET,
    });
    return data;
  } catch (error) {
    console.log('Auth error: ', error);
  }
}

async function logOut() {
  try {
    const data = await request({
      endPoint: END_POINTS.LOGOUT,
      methodType: RequestMethodEnum.POST,
    });
    return data;
  } catch (error) {
    console.log('Sign out error: ', error);
  }
}

async function verifyEmail(requestData: VerifyEmailDataI) {
  try {
    const data = await request({
      endPoint: END_POINTS.VERIFY_EMAIL,
      methodType: RequestMethodEnum.POST,
      data: requestData,
    });
    return data;
  } catch (error) {
    console.log('Email verification error: ', error);
  }
}

export {fetchAuthInfo, logOut, signIn, signUp, verifyEmail};
