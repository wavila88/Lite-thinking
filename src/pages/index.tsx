import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import ErrorLabel from '../components/errolLabel';
import styles from '../styles/login.module.css';
import logo from '../../public/images/Logo.png'
import { emailValidation } from '@/utils/utils';
import { LoginErrorMessages, LoginForm } from '@/utils/types';
import { EMAIL_ERROR_MESSAGE } from '@/utils/constants';
import { loginService, initDBService } from '@/service/login.service';


export default function Home() {

  const [errorMessage, setErrorMessage] = useState<LoginErrorMessages>({emailMessage: null, isReadyToSubmit: false});
  const [loginForm, setLoginForm] = useState<LoginForm>({email: '', password:''})

  /**
   * Create DB and load info
   */
  useEffect( () => {
    initDBService();
 },[]);


  const validateEmailFormat = (event : React.ChangeEvent<HTMLInputElement>):void => {
    setLoginForm({...loginForm, email: event.target.value});

    if(emailValidation.test(event.target.value)){

      setErrorMessage({
        emailMessage: null, 
        isReadyToSubmit: true
      });
    } else{
      setErrorMessage({
        emailMessage: EMAIL_ERROR_MESSAGE,
        isReadyToSubmit: false
      })
    } 
  }


  return (
    <>
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img width="150" height="80" src={logo.src}></img>
      </div>
      <div className={styles.input_container}>
        <input  data-testid='email-test' className={styles.input} placeholder="User" onChange={(event) => validateEmailFormat(event)} id={styles.input1}></input>
        <ErrorLabel errorMessage={errorMessage.emailMessage} />
        <input 
          className={styles.input} 
          placeholder="Password" 
          type="password" 
          id={styles.input2} 
          onChange={(event) => setLoginForm({...loginForm, password: event.target.value})}>
          </input>
        <button  data-testid='login-test-id' disabled={!errorMessage.isReadyToSubmit} className={styles.login_button} onClick={() => errorMessage.isReadyToSubmit && loginService(loginForm) }>
          Login
        </button>
      </div>
      <div className={styles.container_password}>
        <div className={styles.title}>Forgot Password</div>
      </div>
      <button className={styles.register_button}>
        Sing in
      </button>
    </div>
    </>
  )
};
