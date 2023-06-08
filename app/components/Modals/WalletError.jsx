const WalletError = ({ connectWallet }) => (
  <div className="formContainer">
    <button className="connectButton" onClick={connectWallet}>
      Connect Wallet
    </button>
  </div>
);

export default WalletError;
