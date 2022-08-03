// import API from '../../API';

export const emailAction = (email) => ({ type: 'EMAIL', email });

export const currenciesAction = (currencies) => ({ type: 'CURRENCIES', currencies });

/* export const Coins = () => async () => {
  const data = await API();
  const currencies = Object.keys(data).filter((currencyName) => currencyName !== 'USDT');
  dispatch(CoinsAction(currencies));
}; */
