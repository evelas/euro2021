import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { Input } from '../components/common/formControls/index';
import { useDispatch } from 'react-redux';
import { LoginFormValuesType, LoginFormOwnProps } from '../types/types';
import { authActions } from '../redux/actions/auth';


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  // console.log('login page', props)
  return (
    // eslint-disable-next-line
    <form className="login__form" onSubmit={props.handleSubmit}>
      <h3 className="login__title">Вход в систему</h3>
      <Field
          className="login__input"
          name="login"
          component={Input}
          type="text"
          placeholder="Введите логин"
        />

        <Field
          className="login__input"
          name="password"
          component={Input}
          type="password"
          placeholder="Введите пароль"
        />

      <div className="login__footer">
        <div className="login__forgot">
          <Field className="login__checkbox" name="forgotMe" type="checkbox" id="forgotMe" component="input"  />
          <label className="login__label" htmlFor="forgotMe">Не запоминать</label>
        </div>
        {/* eslint-disable-next-line */}
        <button className="login__button"   >Войти</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm);


const Login: React.FC = () => {

  const dispatch = useDispatch();

  const postLoginData = (formData: LoginFormValuesType) => {
    console.log('hi')
    dispatch(authActions.setLogin(
      formData.login,
      formData.password,
      formData.forgotMe),
    );
    console.log('formData-->', formData)
  };

  return (
    <>
      <Header />
      <main className="login">
        <LoginReduxForm  onSubmit={postLoginData} isDisabled={false} />
      </main>
      <Footer />
    </>
  )
}

export default Login
