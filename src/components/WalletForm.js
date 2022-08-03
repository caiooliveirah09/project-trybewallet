import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currenciesAction } from '../redux/actions';
import currenciesAPI from '../API';

class WalletForm extends Component {
  async componentDidMount() {
    const { currenciesValue } = this.props;
    const data = await currenciesAPI();
    currenciesValue(data);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          DESPESAS:
          <input type="number" data-testid="value-input" />
        </label>
        <label htmlFor="description-input">
          DESCRIÇÃO DA EMPRESA:
          <input type="text" data-testid="description-input" />
        </label>
        <label htmlFor="currency-input">
          <select data-testid="currency-input">
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
          MÉTODO DE PAGAMENTO:
          <select data-testid="method-input">
            <option value="money">
              Dinheiro
            </option>
            <option value="credit">
              Cartão de crédito
            </option>
            <option value="debit">
              Cartão de débito
            </option>
          </select>
        </label>
        <label htmlFor="tag-input">
          TIPO DE DESPESA:
          <select data-testid="tag-input">
            <option value="food">
              Alimentação
            </option>
            <option value="leisure">
              Lazer
            </option>
            <option value="job">
              Trabalho
            </option>
            <option value="transporte">
              Transporte
            </option>
            <option value="health">
              Saúde
            </option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesValue: (coins) => dispatch(currenciesAction(coins)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currenciesValue: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);

// export default WalletForm;
