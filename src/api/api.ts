import Axios  from 'axios';

import { resultCodeEnum } from './../Enum/resultCode';


export const instansAxios = Axios.create({
  withCredentials: true,
  baseURL: 'https://volspb.ru/RESTful/',
});

// ответ от сервера
// eslint-disable-next-line
export type ApiTypes<D = {}, RC = resultCodeEnum> = {
  resultCode: RC;
  items: D;
  message: string;
}
