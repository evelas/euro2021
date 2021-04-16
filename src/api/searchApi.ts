import { instansAxios, ApiTypes } from "./api";
import { ProfileType, SearchFullNameType } from '../types/types';

export const searchApi = {
  getSearch(text: string) {
    return instansAxios.get<ApiTypes<SearchFullNameType>>(`search?text=${text}`);
  },
  getOneUser(id: number) {
    return instansAxios.get<ApiTypes>(`profile/${id}`);
  },
  editProfile(formData: ProfileType, userId: number) {
    return instansAxios.patch<ApiTypes>(`profile/${userId}`, formData);
  },
};

// authAPI.getAuthData().then(res => res.data);
