import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    /* const totalExpenses = expenses.reduce((previousValue, currentValue) => (
      previousValue + Number((currentValue.value) * (currentValue.exchangeRates[currency].ask))), 0);
    console.log(totalExpenses); */
    return (
      <>
        <h2 data-testid="email-field">{ email }</h2>
        <h2 data-testid="total-field">
          {
            expenses.reduce((previousValue, currentValue) => {
              const value = Number(currentValue.exchangeRates[currentValue.currency].ask)
              * currentValue.value;
              previousValue += value;
              return previousValue;
            }, 0).toFixed(2)
          }
        </h2>
        <h2 data-testid="header-currency-field">BRL</h2>
        <span>Header</span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, null)(Header);
