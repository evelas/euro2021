import * as Effects from "redux-saga/effects";
import { userProfileActions, TypesUserProfile } from '../actions';
import { ApiTypes } from "../../api/api";
import { searchApi } from '../../api/searchApi';
import { UserProfileType, ActionSaveEditType, ActionType } from './../../types/types';
import { resultCodeEnum } from "../../enum/resultCode";

async function getUserProfile(id: string) {
  const response = await searchApi.getOneUser(id);
  return response.data;
}

export function* workerGetUserProfile(action: ActionType<string, string>): Generator<Effects.StrictEffect, void, never> {
  try {
    yield Effects.put(userProfileActions.toggleIsFetching(true));
    const data: ApiTypes<UserProfileType> = yield Effects.call(getUserProfile, action.payload);
    switch (data.resultCode) {
      case resultCodeEnum.Success:
        yield Effects.put(userProfileActions.setUser(data.items));
        yield Effects.delay(1700);
        yield Effects.put(userProfileActions.toggleIsFetching(false));
        break;
      case resultCodeEnum.NotFound:
        yield Effects.put(userProfileActions.setUser(null));
        yield Effects.put(userProfileActions.notFoundUser(data.message));
        yield Effects.delay(1700);
        yield Effects.put(userProfileActions.toggleIsFetching(false));
        break;
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchUserProfile() {
  yield Effects.takeEvery(TypesUserProfile.LOAD_USER as string, workerGetUserProfile);
}

// Сохранение профиля
async function editProfile(formData: UserProfileType, userId: number) {
  const response = await searchApi.editProfile(formData, userId);
  return response.data;
}

function* workerEditProfile(action: ActionType<string, ActionSaveEditType>): Generator<Effects.StrictEffect, void, never> {
  try {
    yield Effects.put(userProfileActions.toggleIsSaved(true));
    const data: ApiTypes = yield Effects.call(
      editProfile,
      action.payload.formData,
      action.payload.userId
    );
    switch (data.resultCode) {
      case resultCodeEnum.Success:
        yield Effects.put(userProfileActions.toggleIsSaved(false));
        break;
    }

    yield Effects.delay(1700);

    // TODO: профиль сохранен UI

  } catch (e) {
    console.log(e);
  }
}

export function* watchEditProfile() {
  yield Effects.takeEvery(TypesUserProfile.SAVE_PROFILE as string, workerEditProfile);
}
