export enum RequestMethodEnum {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
}

export type RequestMethod<T> = {
  data?: T;
  endPoint: string;
  methodType: RequestMethodEnum;
};
