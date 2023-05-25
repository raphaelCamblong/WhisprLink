const ethers = require('ethers');

class User {
    getBalance = async (address) => {
        try {
            provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()

            balance = await provider.getBalance("ethers.eth")
            return balance
        } catch (error) {
          console.error('Error:', error);
        }
      };

}

export default User
