import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <WalletForm />
        <p>Wallet</p>
      </>
    );
  }
}

export default Wallet;
