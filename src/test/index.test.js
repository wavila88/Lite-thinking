import {render, fireEvent} from '@testing-library/react'

import Home from '../pages/index';

describe('Login Test', () => {
  let screen;
  let loginButton;
  let emailInput;
  beforeEach(() => {
    screen =render(<Home/>);
    loginButton = screen.getByTestId('login-test-id');
    emailInput = screen.getByTestId('email-test');
  });

  test('login button should be disabled in first render',async () => {
    expect(loginButton).toBeDisabled;
  });

  
  test('When type correct email should enable login button',async () => {
    fireEvent.change(emailInput, {target: {value: 'willocoav@gmail.com'}});
    expect(emailInput).toBeEnabled;
   });

   test('When type correct email should enable login button',async () => {
    fireEvent.change(emailInput, {target: {value: 'wrongEmail'}});
    expect(emailInput).toBeDisabled;
   });
  
});