import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import expensesAction, { currenciesAction } from '../redux/actions';
import currenciesAPI, { API } from '../API';

const alimentacao = 'Alimentação';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      expenses: [],
      id: 0,
    };
  }

  async componentDidMount() {
    const { currenciesValue } = this.props;
    const currenciesName = await currenciesAPI();
    currenciesValue(currenciesName);
  }

  saveExpense = async () => {
    const { value,
      description, currency, method, tag, expenses, id } = this.state;
    const { expensesValue } = this.props;
    const exchangeRates = await API();
    const expense = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
      id,
    };
    this.setState({
      expenses: [...expenses, expense], id: id + 1,
    }, () => {
      expensesValue(expense);
    });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            id="value"
            data-testid="value-input"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            id="description"
            data-testid="description-input"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <label htmlFor="currency-input">
          <select
            data-testid="currency-input"
            id="currency"
            onChange={ this.handleChange }
            value={ currency }
          >
            {currencies.map((currencie, index) => (
              <option
                key={ index }
                value={ currencie }
              >
                {currencie}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">
              Dinheiro
            </option>
            <option value="Cartão de crédito">
              Cartão de crédito
            </option>
            <option value="Cartão de débito">
              Cartão de débito
            </option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag"
            onChange={ this.handleChange }
            value={ tag }
          >
            <option value={ alimentacao }>
              Alimentação
            </option>
            <option value="Lazer">
              Lazer
            </option>
            <option value="Trabalho">
              Trabalho
            </option>
            <option value="Transporte">
              Transporte
            </option>
            <option value="Saúde">
              Saúde
            </option>
          </select>
        </label>
        <button type="button" onClick={ this.saveExpense }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesValue: (coins) => dispatch(currenciesAction(coins)),
  expensesValue: (expenses) => dispatch(expensesAction(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currenciesValue: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

// export default WalletForm;
