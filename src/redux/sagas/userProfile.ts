import * as Effects from "redux-saga/effects";
import { userProfileActions, TypesUserProfile } from '../actions';
import { ApiTypes } from "../../api/api";
import { searchApi } from '../../api/searchApi';
import { UserProfileType, PayloadType } from './../../types/types';
import { resultCodeEnum } from "../../enum/resultCode";

async function getUserProfile(id: number) {
  const response = await searchApi.getOneUser(id);
  return response.data;
}

function* workerGetUserProfile(action: PayloadType<number>): Generator<Effects.StrictEffect, void, never> {
  try {
    const data: ApiTypes<UserProfileType> = yield Effects.call(getUserProfile, action.payload);

    switch (data.resultCode) {
      case resultCodeEnum.Success:
        yield Effects.put(userProfileActions.isLoaded(false));
        yield Effects.put(userProfileActions.setUser(data.items));
        yield Effects.put(userProfileActions.isLoaded(true));
        break;
      case resultCodeEnum.NotFound:
        yield Effects.put(userProfileActions.isLoaded(false));
        yield Effects.put(userProfileActions.notFoundUser(data.message));
        yield Effects.put(userProfileActions.isLoaded(true));
        break;
      default:
        break
    }

  } catch (e) {
    console.log(e);
  }
}

export function* watchUserProfile() {
  yield Effects.takeEvery(TypesUserProfile.LOAD_USER as never, workerGetUserProfile);
}

// Сохранение профиля
// async function editProfile(formData: ProfileType, userId: number) {
//   const response = await adminApi.editProfile(formData, userId);
//   return response.data;
// }

// function* workerEditProfile(action: PayloadType<ActionSaveEditType>): Generator<Effects.StrictEffect, void, never> {
//   try {
//     const data: ApiTypes = yield Effects.call(
//       editProfile,
//       action.payload.formData,
//       action.payload.userId
//     );
//     console.log(data);
//     //yield put(searchUserActions.saveProfile(data));
//   } catch (e) {
//     console.log(e);
//   }
// }
// export function* watchEditProfile() {
//   yield Effects.takeEvery(TypesSearchUser.SAVE_PROFILE as never, workerEditProfile);
// }
