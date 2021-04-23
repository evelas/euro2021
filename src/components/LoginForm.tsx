import React from 'react'
import Timer from './common/Timer';
import { validateLoginForm } from '../helpers/validators/loginForm';
import { Field, Form, Formik } from 'formik';
import { LoginFormValuesType } from '../types/types';

type PropsType = {
  formError: string
  submit: (values: LoginFormValuesType) => void
  isTryTime: boolean
}

const LoginForm: React.FC<PropsType> = ({submit, formError, isTryTime}: PropsType) => {
  const initialValues = { login: '', password: '', forgotMe: false } as LoginFormValuesType;
  return (
    <>
      <Formik
          initialValues={initialValues}
          onSubmit={submit}
          validate={validateLoginForm}
        >
          {({
            errors,
            touched
          }) => (
            <Form className="login__form">
              <h3 className="login__title">Вход в систему</h3>

              <Field className="login__input" type="email" name="login" />
              <div className="login__validate">{errors.login && touched.login && errors.login}</div>

              <Field className="login__input" type="password" name="password" />
              <div className="login__validate">{errors.password && touched.password && errors.password}</div>

              <div className="login__footer">
                <div className="login__forgot">
                  <Field className="login__checkbox" name="forgotMe" type="checkbox" id="forgotMe" />
                  <label className="login__label" htmlFor="forgotMe">Не запоминать</label>
                </div>

                <button className="login__button" type="submit" disabled={isTryTime}>
                  Войти
                </button>
              </div>
              {formError ? (<div className="login__error">{formError}</div>) : null}
              {isTryTime && (
                <Timer
                  visible={isTryTime}
                  text={'Время до повторной попытки: '}
                  type={'login'}
                />
              )}
            </Form>
          )}
        </Formik>
    </>
  )
}

export default LoginForm
