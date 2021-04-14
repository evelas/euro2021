import React from 'react';
// import classNames from 'classnames';

// eslint-disable-next-line
export const Input = ({ input, meta: { touched, error }, ...props }: any) => {
  const hasError = touched && error;
  console.log('input:', props)
  return (
    // <div
    //   className={classNames('registration__input', {
    //     error:
    //       (touched && hasError === 'Это обязательное поле.') ||
    //       (touched && hasError === 'Вы не правильно ввели почту.') ||
    //       (touched && hasError === 'Пароли не совпадают'),
    //   })}>
    <div>
      {/* <input {...props} /> */}
      <input {...input} {...props} />
      {hasError && <span> {error}</span>}
    </div>
  );
};


