# Account Abstraction

![Logo](apps/frontend/src/assets/logo.png)

Simplified version of the [Account Abstraction pattern](https://github.com/eth-infinitism/account-abstraction) for the Vechain Thor network.

The contracts consist of:

- SimpleAccount: The AA of the users, it allows the user to send transactions with it direct call execution or through signed type message broadcasted by other wallets.
- SimpleAccountFactory: Factory contract to create SimpleAccount contracts. It allows anyone to create a new SimpleAccount contract and set the owner of the contract to the caller. In order to have a common standard we calculate the salt as `BigInt(ownerAddress)`.

This project consist of a frontend that interacts with the contracts deployed on the Vechain Thor network and a set of contracts that can be forked and used in your own projects.

We recommend directly using the already deployed contracts in order to have as less source of truth as possible for projects on vechain.

## Requirements

Ensure your development environment is set up with the following:

- **Node.js (v18 or later):** [Download here](https://nodejs.org/en/download/package-manager) 📥
- **Yarn:** [Install here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) 🧶
- **Docker (for containerization):** [Get Docker](https://docs.docker.com/get-docker/) 🐳
- **Hardhat (for smart contracts):** [Getting Started with Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) ⛑️

## Project Structure

### Frontend (apps/frontend) 🌐

A blazing-fast React application powered by Vite:

- **Vechain dapp-kit:** Streamline wallet connections and interactions. [Learn more](https://docs.vechain.org/developer-resources/sdks-and-providers/dapp-kit)

### Contracts (packages/contracts) 📜

Smart contract in Solidity, managed with Hardhat for deployment on the Vechain Thor network.

### Packages 📦

Shared configurations and utility functions to unify and simplify your development process.

### Getting Started

Clone the repository and install dependencies with ease:

```bash
yarn # Run this at the root level of the project
```

Place your `.env` files in the root folder, you can copy `.env.example` file and rename it to `.env` changing the values to your own:

## Running on Testnet 🌐

### Deploy the contracts on the Testnet:

```bash
  yarn contracts:deploy:testnet
```

### Run the frontend to interact with the contracts on the Testnet:

```bash
  yarn dev:testnet
```

## Running on Mainnet 🌐

### Deploy the contracts on the Mainnet:

```bash
  yarn contracts:deploy:mainnet
```

### Run the frontend to interact with the contracts on the Mainnet:

```bash
  yarn dev:mainnet
```
