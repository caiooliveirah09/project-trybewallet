import React from 'react';
import renderWithRouterAndRedux from './helpers/renders'
import WalletForm from '../components/WalletForm';
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';


describe('test the WalletForm component', () => {
  test('1 - test if you have all the base html of the component', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    expect(valueInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })
  test('2 - test if you have all payment methods', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const dinheiro = screen.getByRole("option", { name: /dinheiro/i });
    const cartaoCredito = screen.getByRole("option", { name: /cartão de crédito/i });
    const cartaoDebito = screen.getByRole("option", { name: /cartão de débito/i });
    expect(dinheiro).toBeInTheDocument();
    expect(cartaoCredito).toBeInTheDocument();
    expect(cartaoDebito).toBeInTheDocument();
  })  
  test('3 - test if you have all expense categories', () => {
    renderWithRouterAndRedux(<WalletForm />);
    const alimentacao = screen.getByRole("option", { name: /alimentação/i });
    const lazer = screen.getByRole("option", { name: /lazer/i });
    const trabalho = screen.getByRole("option", { name: /trabalho/i });
    const transporte = screen.getByRole("option", { name: /transporte/i });
    const saude = screen.getByRole("option", { name: /saúde/i });
    expect(alimentacao).toBeInTheDocument();
    expect(lazer).toBeInTheDocument();
    expect(trabalho).toBeInTheDocument();
    expect(transporte).toBeInTheDocument();
    expect(saude).toBeInTheDocument();
  })
  test('4 - test if the api call is made when adding expense', async () => {
    renderWithRouterAndRedux(<WalletForm />);
    const button = screen.getByRole('button', { name: /adicionar despesa/i });
    const mockCallBack = jest.fn();
    userEvent.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  })
})
