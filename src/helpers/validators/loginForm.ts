import { FormikValues } from 'formik';
import { LoginFormValuesType } from '../../types/types';

export  const validateLoginForm = (values: FormikValues) => {

  const errors = {} as LoginFormValuesType;

  if(!values.password) {
    errors.password = 'Обязательное поле';
  }
  if (!values.login) {
    errors.login = 'Обязательное поле';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)
  ) {
    errors.login = 'Неверный адрес электронной почты';
  }

  return errors;

}
