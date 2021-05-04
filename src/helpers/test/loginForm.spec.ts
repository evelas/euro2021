import { validateLoginForm } from "../validators/loginForm";

describe("validateLoginForm", () => {
  it("Positive validate cases", () => {
    expect(validateLoginForm({login: 'evelas94@gmail.com', password: 'string'})).toStrictEqual({});
  });

  it("Negative validate cases", () => {
    expect(validateLoginForm(
      {login: 'login', password: 'string'})).toStrictEqual({login: 'Неверный адрес электронной почты'}
    );
    expect(validateLoginForm(
      {login: 'evelas94@gmail.com', password: ''})).toStrictEqual({password: 'Обязательное поле'}
    );
    expect(validateLoginForm(
      {login: '', password: 'string'})).toStrictEqual({login: 'Обязательное поле'}
    );

    expect(validateLoginForm(
      {login: null, password: 'string'})).toStrictEqual({login: 'Обязательное поле'}
    );
    expect(validateLoginForm(
      {login: undefined, password: 'string'})).toStrictEqual({login: 'Обязательное поле'}
    );

    expect(validateLoginForm({login: 'evelas94', password: ''})).toStrictEqual(
      {password: 'Обязательное поле', login: 'Неверный адрес электронной почты'}
    );
    expect(validateLoginForm(
      {login: '', password: ''})).toStrictEqual({ login: 'Обязательное поле', password: 'Обязательное поле'}
    );
  });
});
