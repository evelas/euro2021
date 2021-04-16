import { UserProfileType } from '../../types/types';

export const TypesUserProfile = {
  SET_USER: '/reducers/userProfile/SET_USER' as const,
  IS_LOADED: '/reducers/userProfile/IS_LOADED' as const,
  LOAD_USER: '/reducers/userProfile/LOAD_USER' as const,
  SAVE_PROFILE: '/reducers/userProfile/SAVE_PROFILE' as const,
  NOT_FOUND_USER: '/reducers/userProfile/NOT_FOUNDS_USER' as const,
};

export const userProfileActions = {
  setUser: (User: UserProfileType) => ({
    type: TypesUserProfile.SET_USER,
    payload: User,
  }),
  loadOneUser: (userId: string) => ({
    type: TypesUserProfile.LOAD_USER,
    payload: userId,
  }),
  notFoundUser: (text: string) => ({
    type: TypesUserProfile.NOT_FOUND_USER,
    payload: text
  }),
  isLoaded: (isLoad: boolean) => ({
    type: TypesUserProfile.IS_LOADED,
    payload: isLoad,
  }),
  saveProfile: (formData: UserProfileType, userId: number) => ({
    type: TypesUserProfile.SAVE_PROFILE,
    payload: {
      formData: formData,
      userId: userId,
    },
  }),
};
