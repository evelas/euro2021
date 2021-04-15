import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';

import { useDispatch, useSelector } from 'react-redux';
import { LoginFormValuesType } from '../types/types';
import { authActions } from '../redux/actions/auth';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { AppStateType } from '../redux/reducers';

import Timer from '../components/common/Timer';

const Login: React.FC = () => {

  const dispatch = useDispatch();
  const isError = useSelector((state: AppStateType) => state.auth.formError);
  const isTryTime = useSelector((state: AppStateType) => state.auth.isTryTime);

  const initialValues = { login: '', password: '', forgotMe: false } as LoginFormValuesType;

  async function submit (values: FormikValues, { setSubmitting }: FormikHelpers<FormikValues>) {
    dispatch(authActions.setLogin(
      values.login,
      values.password,
      values.forgotMe),
    );
    setSubmitting(false);
  }
  return (
    <>
      <Header />
      <main className="login">
        <Formik
          initialValues={initialValues}
          onSubmit={submit}
        >
          {({
            isSubmitting,
          }) => (
            <Form className="login__form">
              <h3 className="login__title">Вход в систему</h3>

              <Field className="login__input" type="email" name="login" />
              <Field className="login__input" type="password" name="password" />

              <div className="login__footer">
                <div className="login__forgot">
                  <Field className="login__checkbox" name="forgotMe" type="checkbox" id="forgotMe" />
                  <label className="login__label" htmlFor="forgotMe">Не запоминать</label>
                </div>

                <button className="login__button" type="submit" disabled={isSubmitting || isTryTime}>
                  Войти
                </button>
              </div>
              {isError ? (<div className="login__error">{isError}</div>) : null}
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
      </main>
      <Footer />
    </>
  )
}

export default Login
