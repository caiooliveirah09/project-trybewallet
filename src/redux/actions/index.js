// import API from '../../API';

export const emailAction = (email) => ({ type: 'EMAIL', email });

export const currenciesAction = (currencies) => ({ type: 'CURRENCIES', currencies });

const expensesAction = (expenses) => ({ type: 'EXPENSES', expenses });

export default expensesAction;

/* export const Coins = () => async () => {
  const data = await API();
  const currencies = Object.keys(data).filter((currencyName) => currencyName !== 'USDT');
  dispatch(CoinsAction(currencies));
}; */
