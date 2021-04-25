import { instansAxios, ApiTypes } from "./api";
import { ProfileType } from '../types/types';

export const authApi = {
  getAuthData() {
    return instansAxios.get<ApiTypes<ProfileType>>(`auth`);
  },

  login(login: string, password: string, forgotMe: boolean) {
    return instansAxios.post<ApiTypes>(`login`, { login, password, forgotMe });
  },
  logout() {
    return instansAxios.delete<ApiTypes>(`auth`);
  },
};

