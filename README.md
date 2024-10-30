# Reclaim Protocol Starter Pack - Wagmi

This repository provides a **React-based frontend example** for developers to interact with the Reclaim Protocol smart contract on any **EVM** network. This template demonstrates how to submit and verify proofs on-chain, making it easier for developers to integrate Reclaim Protocol into their applications.

---

## Features

- **Proof Submission**: Generate proof requests and submit them on-chain.
- **Proof Verification**: Verify submitted proofs directly through the smart contract.
- **Wallet Connection**: Built-in wallet connection.

---

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

Run this command:
```bash
git clone https://gitlab.reclaimprotocol.org/starterpacks/reclaim-wagmi-example.git
cd reclaim-wagmi-example
```
### 2. Install Dependencies

Run this command:
```bash
npm install
```
### 3. Code Configuration

In `src/App.js`, fill in the necessary Reclaim credentials and replace `TODO` comments with your application-specific data:

```javascript
const APP_ID = "YOUR_APP_ID"; // Replace with your application ID
const providerId = "YOUR_PROVIDER_ID"; // Replace with your provider ID
const APP_SECRET = "YOUR_APP_SECRET"; // Replace with your app secret
```

### 4. Update Contract Address

If you deployed a custom contract, update the contract address in `src/verify-proof.jsx`:

```javascript
address: "your-contract-address", //TODO : replace with your contract's address
```

Also in default the `chainId` is set to `10` (OP Mainnet) if you are planning on using another EVM Network replace the chain id:

```javascript
chainId: 10, //TODO : replace with your chain id
```

### 5. Switch to another chain

If you are using another chain after replacing the **chainId** and **address** in `src/verify-proof.jsx` you need to make sure the network is added to wagmi configuration in `src/config.js` if your network doesn't exist just import it from `"wagmi/chains"` and add it to the config.

---

## Usage

After configuration, you can run the project locally to test the proof verification process.

### Start the Development Server

Run this command:
```bash
npm run dev
```
1. **Connect Wallet**: Ensure your wallet is connected and set to the correct network.
2. **Request Proof**: Click the "Create Claim QR Code" button to generate a QR code for proof submission.
3. **Verify Proof**: Once the proof is received, a "Verify Proof" button appears. Click it to submit a transaction for on-chain verification.
4. **View Transaction**: After verification, a link to view the transaction on the explorer will be available.

---

## Code Overview

`src/App.js`

- Proof Request: Configures and initiates proof requests through Reclaim’s SDK.
- QR Code Generation: Displays a QR code for users to scan and submit proofs.
- Proof Submission: Handles on-chain submission upon proof verification.

`src/verify-proof.jsx`

- Proof Transformation: Transforms the received proof to be compatible with the smart contract.
- Verification Process: Sends a transaction to verify the proof on-chain and provides a link to the transaction on the explorer.

---

## Troubleshooting

- **Wallet Connection Issues**: Ensure that your wallet is set to the correct network that you contract is deployed on and refresh the page if the connection fails.
- **Proof Submission Fails**: Double-check your Reclaim credentials, contract address, and that the correct network is selected.