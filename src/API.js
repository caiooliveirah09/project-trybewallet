const currenciesAPI = async () => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const currencies = Object.keys(data).filter((coinName) => coinName !== 'USDT');
    return currencies;
  } catch (error) {
    return error;
  }
};

export default currenciesAPI;
