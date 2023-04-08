import React from 'react';
import { Link } from 'react-router-dom';

function AuthPage({ formName, onSubmit, title, children, buttonText, isValid }) {
  return (
    <section className='auth'>
      <h3 className='auth__title'>{title}</h3>
      <form
        className='auth__form'
        name={formName}
        onSubmit={onSubmit}
        noValidate>
        {children}
        <button
          className={`auth__button ${!isValid ? 'auth__button_disabled' : ''}`}
          type='submit'
          disabled={!isValid}>
          {buttonText}
        </button>
      </form>
      {formName === 'login' ? (
        <p className='auth__link'></p>
      ) : (
        <Link
          to='/signin'
          className='auth__link'>
          Уже зарегистрированы? Войти
        </Link>
      )}
    </section>
  );
}

export default AuthPage;
