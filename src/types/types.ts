export type Nullable<T> = null | T;

export type ProfileType = {
  userId: number;
  email: string;
};

export type LoginFormValuesType = {
  login: string;
  forgotMe: boolean;
  password: string;
}

export type LoginFormOwnProps = {
  isDisabled: boolean;
}

export type PayloadType<T> = {
  payload: T;
}

export type SearchFullNameType = {
  id: number;
  fullName: string;
}
