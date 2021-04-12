import React from 'react'
import Footer from '@components/Footer';
import Header from '@components/Header';

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <main className="login">
        <form className="login__form">
          <h3 className="login__title">Вход в систему</h3>
          <input className="login__input" type="text" name="login" placeholder="Введите логин"/>
          <input className="login__input" type="text" name="password" placeholder="Введите пароль"/>
          <div className="login__footer">
            <div className="login__forgot">
              <input className="login__checkbox" type="checkbox" name="forgotMe" id="forgotMe"/>
              <label className="login__label" htmlFor="forgotMe">Не запоминать</label>
            </div>
            <button className="login__button" type="button">Войти</button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default Login
