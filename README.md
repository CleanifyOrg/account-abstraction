# React Dapp Template 🚀

This is a simple template of a decentralized application (DApp) built with React, and Solidity. It is designed to help you kickstart your DApp development journey.

This template creates a simple DApp that allows users to interact with an erc20 token contract called *Fiorino*. Users can send and receive tokens, and the contract owner can mint new tokens.

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

## Running on Solo Network Locally (docker needed!) 🔧

### Spin up the Solo Network in a docker container:

```bash
  yarn solo-up
```

### Run the frontend and deploy the contracts on the Local Solo Network (if not deployed yet) with a single command:

```bash
  yarn dev
```

You should see a log like this, that means the frontend is running:

```bash
frontend:dev:   VITE v5.3.2  ready in 135 ms
frontend:dev: 
frontend:dev:   ➜  Local:   http://localhost:5001/
frontend:dev:   ➜  Network: http://192.168.1.26:5001/
frontend:dev:   ➜  Network: http://192.168.64.1:5001/
frontend:dev:   ➜  press h + enter to show help
```

and then you see a log like this, that means the contracts are deployed:

```bash
@repo/contracts:check-contracts-deployment: ================  Contracts deployed in 0m 9s 
@repo/contracts:check-contracts-deployment: Contracts { fiorino: '0xE55842798426F155Ad7Ff6E9C93378690d1FF46a' }
@repo/contracts:check-contracts-deployment: Contracts and libraries addresses saved to /path/apps/react-dapp-template/packages/contracts/deploy_output
@repo/contracts:check-contracts-deployment: Total execution time: 0m 9s
@repo/contracts:check-contracts-deployment: Deployment completed successfully!
@repo/contracts:check-contracts-deployment: ================================================================================
@repo/contracts:check-contracts-deployment: Writing new config file to /path/apps/react-dapp-template/packages/config/local.ts
```

or a log like this, that means the contracts are already deployed (if you run the `yarn dev` command again):

```bash
@repo/contracts:check-contracts-deployment: Checking contracts deployment on vechain_solo (http://localhost:8669)...
@repo/contracts:check-contracts-deployment: fiorino contract already deployed
```

### Redeploy the contracts:

```bash
  yarn contracts:deploy
```

or 

Put empty string in the `fiorinoContractAddress` in the `packages/config/local.ts` file:

```typescript
  fiorinoContractAddress: "",
```

and then run the `yarn dev` command again.

### Spin down the Solo Network

```bash
  yarn solo-down
```

### Clean docker solo network

```bash
  yarn solo-clean
```

## Running on Testnet  🌐

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


## Disclaimer ⚠️

This template serves as a foundational starting point and should be thoroughly reviewed and customized to suit your project’s specific requirements. Pay special attention to configurations, security settings, and environment variables to ensure a secure and efficient deployment.
