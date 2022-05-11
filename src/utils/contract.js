import Web3 from "web3";
import contractAbi from "./contractAbi";

export const BINANCE_RPC = "https://bsc-dataseed.binance.org/";
export const HASH_LINK = "https://bscscan.com/tx/";

const web3 = new Web3(new Web3.providers.HttpProvider(BINANCE_RPC));

const contract = new web3.eth.Contract(contractAbi.abi, contractAbi.address);

export const connectWallet = async (userAddress = null) => {
  if (window.ethereum) {
    if (window.ethereum.selectedAddress) {
      if (
        userAddress &&
        userAddress.toLowerCase() !== window.ethereum.selectedAddress.toLowerCase()
      ) {
        return false;
      }
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    window.web3 = new Web3(window.ethereum);

    return accounts[0];
  } else if (window.BinanceChain) {
    const accounts = await window.BinanceChain.request({
      method: "eth_accounts",
    });
    if (accounts.length) {
      if (
        userAddress &&
        userAddress.toLowerCase() !== accounts[0].toLowerCase()
      ) {
        return false;
      }
    }
    window.web3 = new Web3(window.BinanceChain);

    return accounts[0];
  }

  return false;
};

export const sendTx = async (transactionHash, userId, token) => {
  const response = await fetch(`https://api.smart-profit.info/save-tx`, {
    method: "POST",
    body: JSON.stringify({ user_id: userId, tx_hash: transactionHash }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getSupported = async (ref_id, token) => {
  const response = await fetch(
    `https://api.smart-profit.info/get-supported?contract_id=${ref_id}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  return data;
};

export const handleSendTxHash = async (transactionHash, userId, token) => {
  const response = await fetch(`https://api.smart-profit.info/save-tx`, {
    method: "POST",
    body: JSON.stringify({ user_id: userId, tx_hash: transactionHash }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export default contract;
