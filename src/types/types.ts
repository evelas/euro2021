export type Nullable<T> = null | T;

export type ProfileType = {
  id: number;
  email: string;
};

export type UserProfileType = {
  userId: string;
  email: string;
  name: string;
  lastname: string;
  middlename: string;
  citizen: string;
  birthday: string;
  country: string;
  city: string;
  phone: string;
  vk: string;
  inst: string;
  university: string;
  direction1: string;
  direction2: string;
  sizeclothes: string;
  experience: string;
  problemhealth: string;
  decision: string;
  new_decision: string;
  avatardecision: string;
  status: string;
  activation: string;
  calendar: string;
  graphs: string;
}

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

// save after edit profile
export type ActionSaveEditType = {
  formData: UserProfileType;
  userId: number;
}
