import React from 'react';
import renderWithRouterAndRedux from './helpers/renders'
import Header from '../components/Header';
import { screen } from '@testing-library/react'

describe('test the header component', () => {
  test('1 - test if you have all the base html of the component', () => {
    renderWithRouterAndRedux(<Header />)
    const emailField = screen.getByTestId('email-field');
    const totalField = screen.getByTestId('total-field');
    const headerCurrencyField = screen.getByTestId('header-currency-field');
    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(headerCurrencyField).toBeInTheDocument();
  })
})
