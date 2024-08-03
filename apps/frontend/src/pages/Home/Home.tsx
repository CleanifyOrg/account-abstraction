import { HStack, VStack } from "@chakra-ui/react";
import { ContractInfo } from "./components/ContractInfo";
import { getConfig } from "@repo/config";
import { AbstractedAccounts } from "./components/AbstractedAccounts/AbstractedAccounts";

export const Home = () => {
  return (
    <VStack align="stretch" gap={4}>
      <HStack spacing={4}>
        <ContractInfo
          title="Accounts Factory - Testnet"
          address={getConfig("testnet").simpleAccountFactoryContractAddress}
          env="testnet"
        />
        <ContractInfo
          title="Accounts Factory - Mainnet"
          address={getConfig("mainnet").simpleAccountFactoryContractAddress}
          env="mainnet"
        />
      </HStack>

      <AbstractedAccounts />
    </VStack>
  );
};
