import React from 'react';
import renderWithRouterAndRedux from './helpers/renders'
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import App from '../App'
import { screen } from '@testing-library/react'

describe('test the login page', () => {
  test('1 - make sure you have the email, password and enter button fields', () => {
    renderWithRouterAndRedux(<Login />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })
  test('2 - test if the enter button is disabled if you do not fill in the fields', () => {
    renderWithRouterAndRedux(<Login />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toHaveProperty('disabled', true);
  })
  test('3 - test if the enter button is enabled if you fill in the fields', () => {
    renderWithRouterAndRedux(<Login />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(email, 'test@test');
    userEvent.type(password, '123456');
    expect(button).toHaveProperty('disabled', false);
  })
  test('4 - test if you log in', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(email, 'test@test');
    userEvent.type(password, '1234567');
    userEvent.click(button);
    const emailLogged = screen.getByRole("heading", { name: /test@test/i });
    expect(emailLogged).toBeInTheDocument();
  })
})