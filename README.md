# Account Abstraction

<div align="center">
  <img src="apps/frontend/src/assets/logo.png" alt="Logo" width="200"/>

  <p>Simplified version of the [Account Abstraction pattern](https://github.com/eth-infinitism/account-abstraction) for the vechain blockchain.</p>
</div>

There are 2 contracts:

- **SimpleAccount**: Is the abstracted account of the user.
- **SimpleAccountFactory**: Factory contract to create SimpleAccount contracts on demand.

You can fork the contracts and deploy them on your own, but we recommend using the contracts deployed by us for a better cross-app compatibility.

Owner of the Simple Account can execute transactions called directly from him or authorized via signatures and broadcasted by a third party.

## Run the project

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
