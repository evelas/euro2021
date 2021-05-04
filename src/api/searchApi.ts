import { instansAxios, ApiTypes } from "./api";
import { SearchType, UserProfileType } from '../types/types';

export const searchApi = {
  getSearch(text: string) {
    return instansAxios.get<ApiTypes<Array<SearchType>>>(`search?text=${text}`);
  },
  getOneUser(id: string) {
    return instansAxios.get<ApiTypes>(`profile/${id}`);
  },
  editProfile(formData: UserProfileType, userId: number) {
    return instansAxios.patch<ApiTypes>(`profile/${userId}`, formData);
  },
};

