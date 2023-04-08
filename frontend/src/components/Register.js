import React, { useEffect } from 'react';
import AuthPage from './AuthPage';
import useFormAndValidation from '../hooks/useFormAndValidation';

function Register({ handleRegister }) {
  const initialValues = {
    email: '',
    password: '',
  };

  const { values, errors, isValid, handleChange, setIsValid, resetForm } =
    useFormAndValidation(initialValues);

  useEffect(() => {
    setIsValid(false);
  }, [setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    let { email, password } = values;
    handleRegister(email, password);
    resetForm();
  }

  // const [userData, setUserData] = useState({
  //   email: '',
  //   password: '',
  // });

  // function handleChange(evt) {
  //   const { name, value } = evt.target;

  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   });
  // }

  return (
    <section className='auth'>
      <AuthPage
        formName='register'
        onSubmit={handleSubmit}
        title='Регистрация'
        buttonText='Зарегистрироваться'
        isValid={isValid}>
        <div className='auth__inputs'>
          <input
            className='auth__input auth__input_type_email'
            id='email-input'
            type='email'
            name='email'
            placeholder='Email'
            autoComplete='off'
            required
            value={values.email || ''}
            onChange={handleChange}
          />
          <span
            id='email-input-error'
            className='auth__error email-input-error'>
            {errors.email}
          </span>
          <input
            className='auth__input auth__input_type_password'
            id='password-input'
            type='password'
            name='password'
            placeholder='Пароль'
            autoComplete='off'
            required
            value={values.password || ''}
            onChange={handleChange}
          />
          <span
            id='password-input-error'
            className='auth__error password-input-error'>
            {errors.password}
          </span>
        </div>
      </AuthPage>
    </section>
  );
}

export default Register;
