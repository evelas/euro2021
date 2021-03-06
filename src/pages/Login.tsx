import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFormValuesType } from '../types/types';
import { authActions } from '../redux/actions/auth';
import { AppStateType } from '../redux/reducers';
import LoginForm from '../components/LoginForm';


const Login: React.FC = () => {

  const dispatch = useDispatch();
  const {formError, isTryTime} = useSelector((state: AppStateType) => state.auth);

  const submit = (values: LoginFormValuesType) => {
    dispatch(authActions.setLogin(
      values.login,
      values.password,
      values.forgotMe),
    );
  }

  return (
    <>
      <Header />
      <main className="login">
        <LoginForm submit={submit} formError={formError} isTryTime={isTryTime} />
      </main>
      <Footer />
    </>
  )
}

export default Login;
