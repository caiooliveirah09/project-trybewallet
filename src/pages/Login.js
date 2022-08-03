import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logged: false,
      disabled: true,
    };
  }

  checkButton = () => {
    if (this.checkEmail() && this.checkPassword()) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  checkEmail = () => {
    const { email } = this.state;
    const auth = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(auth)) {
      return true;
    }
  }

  checkPassword = () => {
    const { password } = this.state;
    const min = 6;
    if (password.length >= min) {
      return true;
    }
  }

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.type]: event.target.value }, () => {
      this.checkButton();
    });
  };

  login = (event) => {
    event.preventDefault();
    this.setState({ logged: true });
    const { emailValue } = this.props;
    const { email } = this.state;
    emailValue(email);
    console.log(emailValue);
  }

  render() {
    const { email, password, logged, disabled } = this.state;
    if (logged) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <label htmlFor="email">
          email:
          <input
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          password:
          <input
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button type="button" onClick={ this.login } disabled={ disabled }>
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValue: (email) => dispatch(emailAction(email)),
});

Login.propTypes = {
  emailValue: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
