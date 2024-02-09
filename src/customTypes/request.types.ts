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

export interface SigninDataI {
  username: string;
  email: string;
}
