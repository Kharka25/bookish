export enum RequestMethodEnum {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
}

export type RequestConfig<T> = {
  data?: T;
  endPoint: string;
  methodType: RequestMethodEnum;
};

export interface SignupDataI {
  username: string;
  email: string;
  password: string;
}

export interface SigninDataI {
  username: string;
  email: string;
}

export interface VerifyEmailDataI {
  token: string;
  userId: string;
}
